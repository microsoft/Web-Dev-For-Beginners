<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cf15ff7770c5a484349383bb27d1131f",
  "translation_date": "2025-08-29T09:47:44+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "id"
}
-->
# Proyek Chat

Proyek chat ini menunjukkan cara membangun Asisten Chat menggunakan GitHub Models.

Berikut adalah tampilan akhir dari proyek ini:

<div>
  <img src="./assets/screenshot.png" alt="Aplikasi Chat" width="600">
</div>

Sebagai konteks, membangun asisten chat menggunakan AI generatif adalah cara yang bagus untuk mulai belajar tentang AI. Dalam pelajaran ini, Anda akan belajar cara mengintegrasikan AI generatif ke dalam aplikasi web. Mari kita mulai.

## Menghubungkan ke AI Generatif

Untuk backend, kita menggunakan GitHub Models. Ini adalah layanan hebat yang memungkinkan Anda menggunakan AI secara gratis. Kunjungi playground-nya dan ambil kode yang sesuai dengan bahasa backend pilihan Anda. Berikut adalah tampilan [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground).

<div>
  <img src="./assets/playground.png" alt="GitHub Models AI Playground" with="600">
</div>

Seperti yang disebutkan, pilih tab "Code" dan runtime pilihan Anda.

<div>
  <img src="./assets/playground-choice.png" alt="pilihan playground" with="600">
</div>

Dalam kasus ini, kita memilih Python, yang berarti kita akan menggunakan kode berikut:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings. 
# Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key=os.environ["GITHUB_TOKEN"],
)

response = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "",
        },
        {
            "role": "user",
            "content": "What is the capital of France?",
        }
    ],
    model="openai/gpt-4o-mini",
    temperature=1,
    max_tokens=4096,
    top_p=1
)

print(response.choices[0].message.content)
```

Mari kita bersihkan kode ini agar lebih dapat digunakan kembali:

```python
def call_llm(prompt: str, system_message: str):
    response = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="openai/gpt-4o-mini",
        temperature=1,
        max_tokens=4096,
        top_p=1
    )

    return response.choices[0].message.content
```

Dengan fungsi `call_llm` ini, kita dapat mengambil prompt dan sistem prompt, lalu fungsi ini akan mengembalikan hasilnya.

### Kustomisasi Asisten AI

Jika Anda ingin menyesuaikan asisten AI, Anda dapat menentukan bagaimana ia harus berperilaku dengan mengisi sistem prompt seperti ini:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## Mengeksposnya melalui Web API

Bagus, kita telah menyelesaikan bagian AI, sekarang mari kita lihat bagaimana kita dapat mengintegrasikannya ke dalam Web API. Untuk Web API, kita memilih menggunakan Flask, tetapi framework web lainnya juga bisa digunakan. Berikut adalah kodenya:

```python
# api.py
from flask import Flask, request, jsonify
from llm import call_llm
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com

@app.route("/", methods=["GET"])
def index():
    return "Welcome to this API. Call POST /hello with 'message': 'my message' as JSON payload"


@app.route("/hello", methods=["POST"])
def hello():
    # get message from request body  { "message": "do this taks for me" }
    data = request.get_json()
    message = data.get("message", "")

    response = call_llm(message, "You are a helpful assistant.")
    return jsonify({
        "response": response
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

Di sini, kita membuat API Flask dan mendefinisikan rute default "/" dan "/chat". Rute "/chat" dimaksudkan untuk digunakan oleh frontend kita untuk mengirimkan pertanyaan.

Untuk mengintegrasikan *llm.py*, berikut yang perlu kita lakukan:

- Impor fungsi `call_llm`:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- Panggil fungsi tersebut dari rute "/chat":

   ```python
   @app.route("/hello", methods=["POST"])
   def hello():
      # get message from request body  { "message": "do this taks for me" }
      data = request.get_json()
      message = data.get("message", "")

      response = call_llm(message, "You are a helpful assistant.")
      return jsonify({
         "response": response
      })
   ```

   Di sini kita mem-parsing permintaan yang masuk untuk mengambil properti `message` dari body JSON. Setelah itu, kita memanggil LLM dengan panggilan ini:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

Bagus, sekarang kita telah menyelesaikan apa yang diperlukan.

### Konfigurasi Cors

Kita perlu menyebutkan bahwa kita mengatur sesuatu seperti CORS (Cross-Origin Resource Sharing). Ini berarti bahwa karena backend dan frontend kita akan berjalan di port yang berbeda, kita perlu mengizinkan frontend untuk memanggil backend. Ada potongan kode di *api.py* yang mengatur ini:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

Saat ini, pengaturan ini mengizinkan "*" yang berarti semua origin, dan ini agak tidak aman. Kita harus membatasinya saat masuk ke produksi.

## Menjalankan Proyek Anda

Oke, jadi kita memiliki *llm.py* dan *api.py*, bagaimana kita bisa membuat ini bekerja dengan backend? Ada dua hal yang perlu kita lakukan:

- Instal dependensi:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- Jalankan API

   ```sh
   python api.py
   ```

   Jika Anda menggunakan Codespaces, Anda perlu pergi ke bagian Ports di bagian bawah editor, klik kanan di atasnya, lalu klik "Port Visibility" dan pilih "Public".

### Mengerjakan Frontend

Sekarang kita memiliki API yang berjalan, mari kita buat frontend untuk ini. Frontend minimal yang akan kita tingkatkan secara bertahap. Di folder *frontend*, buat file berikut:

```text
backend/
frontend/
index.html
app.js
styles.css
```

Mari kita mulai dengan **index.html**:

```html
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <form>
        <textarea id="messages"></textarea>
        <input id="input" type="text" />
        <button type="submit" id="sendBtn">Send</button>  
      </form>  
      <script src="app.js" />
    </body>
</html>    
```

Di atas adalah kebutuhan minimum untuk mendukung jendela chat, yang terdiri dari textarea tempat pesan akan ditampilkan, input untuk mengetik pesan, dan tombol untuk mengirim pesan ke backend. Selanjutnya, mari kita lihat JavaScript di *app.js*.

**app.js**

```js
// app.js

(function(){
  // 1. set up elements  
  const messages = document.getElementById("messages");
  const form = document.getElementById("form");
  const input = document.getElementById("input");

  const BASE_URL = "change this";
  const API_ENDPOINT = `${BASE_URL}/hello`;

  // 2. create a function that talks to our backend
  async function callApi(text) {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });
    let json = await response.json();
    return json.response;
  }

  // 3. add response to our textarea
  function appendMessage(text, role) {
    const el = document.createElement("div");
    el.className = `message ${role}`;
    el.innerHTML = text;
    messages.appendChild(el);
  }

  // 4. listen to submit events
  form.addEventListener("submit", async(e) => {
    e.preventDefault();
   // someone clicked the button in the form
   
   // get input
   const text = input.value.trim();

   appendMessage(text, "user")

   // reset it
   input.value = '';

   const reply = await callApi(text);

   // add to messages
   appendMessage(reply, "assistant");

  })
})();
```

Mari kita bahas kode ini per bagian:

- 1) Di sini kita mendapatkan referensi ke semua elemen yang akan kita gunakan nanti di kode.
- 2) Pada bagian ini, kita membuat fungsi yang menggunakan metode bawaan `fetch` untuk memanggil backend kita.
- 3) `appendMessage` membantu menambahkan respons serta apa yang Anda ketik sebagai pengguna.
- 4) Di sini kita mendengarkan event submit, membaca input field, menempatkan pesan pengguna di textarea, memanggil API, dan menampilkan respons di textarea.

Selanjutnya, mari kita lihat styling. Di sini Anda bisa berkreasi sesuka hati, tetapi berikut adalah beberapa saran:

**styles.css**

```
.message {
    background: #222;
    box-shadow: 0 0 0 10px orange;
    padding: 10px:
    margin: 5px;
}

.message.user {
    background: blue;
}

.message.assistant {
    background: grey;
} 
```

Dengan tiga kelas ini, Anda dapat menata pesan secara berbeda tergantung dari mana asalnya, apakah dari asisten atau dari Anda sebagai pengguna. Jika Anda ingin mendapatkan inspirasi, lihat folder `solution/frontend/styles.css`.

### Mengubah Base URL

Ada satu hal yang belum kita atur, yaitu `BASE_URL`. Ini tidak diketahui sampai backend Anda berjalan. Untuk mengaturnya:

- Jika Anda menjalankan API secara lokal, atur ke sesuatu seperti `http://localhost:5000`.
- Jika dijalankan di Codespaces, URL-nya akan terlihat seperti "[name]app.github.dev".

## Tugas

Buat folder Anda sendiri *project* dengan konten seperti ini:

```text
project/
  frontend/
    index.html
    app.js
    styles.css
  backend/
    api.py
    llm.py
```

Salin konten dari instruksi di atas, tetapi jangan ragu untuk menyesuaikannya sesuai keinginan Anda.

## Solusi

[Solusi](./solution/README.md)

## Bonus

Cobalah mengubah kepribadian asisten AI. Saat Anda memanggil `call_llm` di *api.py*, Anda dapat mengubah argumen kedua sesuai keinginan Anda, misalnya:

```python
call_llm(message, "You are Captain Picard")
```

Ubah juga CSS dan teks sesuai keinginan Anda, jadi lakukan perubahan di *index.html* dan *styles.css*.

## Ringkasan

Bagus, Anda telah belajar dari awal cara membuat asisten pribadi menggunakan AI. Kita telah melakukannya menggunakan GitHub Models, backend dalam Python, dan frontend dalam HTML, CSS, dan JavaScript.

## Pengaturan dengan Codespaces

- Arahkan ke: [Repo Web Dev For Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)
- Buat dari template (pastikan Anda sudah login ke GitHub) di pojok kanan atas:

    ![Buat dari template](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.id.png)

- Setelah berada di repo Anda, buat Codespace:

    ![Buat codespace](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.id.png)

    Ini akan memulai lingkungan yang sekarang dapat Anda gunakan.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.