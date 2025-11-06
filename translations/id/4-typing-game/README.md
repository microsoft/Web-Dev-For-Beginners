<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efa2ab875b8bb5a7883816506da6b6d2",
  "translation_date": "2025-11-06T11:53:44+00:00",
  "source_file": "4-typing-game/README.md",
  "language_code": "id"
}
-->
# Pemrograman Berbasis Event - Membangun Game Mengetik

```mermaid
journey
    title Your Typing Game Development Journey
    section Foundation
      Plan game structure: 3: Student
      Design user interface: 4: Student
      Setup HTML elements: 4: Student
    section Functionality
      Handle user input: 4: Student
      Track timing: 5: Student
      Calculate accuracy: 5: Student
    section Features
      Add visual feedback: 5: Student
      Implement game logic: 5: Student
      Polish experience: 5: Student
```

## Pendahuluan

Ada sesuatu yang diketahui oleh setiap pengembang tetapi jarang dibicarakan: mengetik cepat adalah sebuah kekuatan super! 🚀 Pikirkan ini - semakin cepat Anda bisa mentransfer ide dari otak ke editor kode, semakin lancar kreativitas Anda mengalir. Ini seperti memiliki jalur langsung antara pikiran Anda dan layar.

```mermaid
pie title Game Features
    "Real-time Feedback" : 25
    "Performance Tracking" : 20
    "Interactive UI" : 20
    "Timer System" : 15
    "Quote Management" : 10
    "Results Display" : 10
```

Ingin tahu salah satu cara terbaik untuk meningkatkan kemampuan ini? Benar sekali - kita akan membuat sebuah game!

```mermaid
flowchart LR
    A[Player starts game] --> B[Random quote displayed]
    B --> C[Player types characters]
    C --> D{Character correct?}
    D -->|Yes| E[Green highlight]
    D -->|No| F[Red highlight]
    E --> G[Update accuracy]
    F --> G
    G --> H{Quote complete?}
    H -->|No| C
    H -->|Yes| I[Calculate WPM]
    I --> J[Display results]
    J --> K[Play again?]
    K -->|Yes| B
    K -->|No| L[Game over]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```

> Mari kita buat game mengetik yang keren bersama-sama!

Siap menggunakan semua keterampilan JavaScript, HTML, dan CSS yang telah Anda pelajari? Kita akan membuat game mengetik yang akan menantang Anda dengan kutipan acak dari detektif legendaris [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes). Game ini akan melacak seberapa cepat dan akurat Anda mengetik - dan percayalah, ini lebih adiktif daripada yang Anda bayangkan!

```mermaid
mindmap
  root((Typing Game Development))
    User Interface
      Input Elements
      Visual Feedback
      Responsive Design
      Accessibility
    Game Logic
      Quote Selection
      Timer Management
      Accuracy Tracking
      Score Calculation
    Event Handling
      Keyboard Input
      Button Clicks
      Real-time Updates
      Game State Changes
    Performance Metrics
      Words Per Minute
      Character Accuracy
      Error Tracking
      Progress Display
    User Experience
      Immediate Feedback
      Clear Instructions
      Engaging Content
      Achievement System
```

![demo](../../../4-typing-game/images/demo.gif)

## Apa yang Perlu Anda Ketahui

```mermaid
flowchart TD
    A[User Action] --> B{Event Type?}
    B -->|Key Press| C[Keyboard Event]
    B -->|Button Click| D[Mouse Event]
    B -->|Timer| E[Time Event]
    
    C --> F[Check Character]
    D --> G[Start/Reset Game]
    E --> H[Update Timer]
    
    F --> I{Correct?}
    I -->|Yes| J[Highlight Green]
    I -->|No| K[Highlight Red]
    
    J --> L[Update Score]
    K --> L
    L --> M[Check Game State]
    
    G --> N[Generate New Quote]
    H --> O[Display Time]
    
    M --> P{Game Complete?}
    P -->|Yes| Q[Show Results]
    P -->|No| R[Continue Game]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```

Sebelum kita mulai, pastikan Anda sudah memahami konsep-konsep berikut (jangan khawatir jika Anda perlu penyegaran cepat - kita semua pernah mengalaminya!):

- Membuat input teks dan kontrol tombol
- CSS dan pengaturan gaya menggunakan kelas  
- Dasar-dasar JavaScript
  - Membuat array
  - Membuat angka acak
  - Mendapatkan waktu saat ini

Jika ada yang terasa sedikit berkarat, itu tidak masalah! Kadang-kadang cara terbaik untuk memperkuat pengetahuan Anda adalah dengan langsung terjun ke proyek dan mempelajari sambil jalan.

### 🔄 **Pengecekan Pedagogis**
**Penilaian Dasar**: Sebelum memulai pengembangan, pastikan Anda memahami:
- ✅ Cara kerja elemen formulir HTML dan input
- ✅ Kelas CSS dan gaya dinamis
- ✅ Event listener dan handler di JavaScript
- ✅ Manipulasi array dan pemilihan acak
- ✅ Pengukuran waktu dan perhitungan

**Tes Diri Cepat**: Bisakah Anda menjelaskan bagaimana konsep-konsep ini bekerja bersama dalam sebuah game interaktif?
- **Event** dipicu saat pengguna berinteraksi dengan elemen
- **Handler** memproses event tersebut dan memperbarui status game
- **CSS** memberikan umpan balik visual untuk aksi pengguna
- **Pengukuran waktu** memungkinkan penilaian performa dan perkembangan game

```mermaid
quadrantChart
    title Typing Game Skills Development
    x-axis Beginner --> Expert
    y-axis Static --> Interactive
    quadrant-1 Advanced Games
    quadrant-2 Real-time Apps
    quadrant-3 Basic Pages
    quadrant-4 Interactive Sites
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```

## Mari Kita Bangun Game Ini!

[Membuat game mengetik menggunakan pemrograman berbasis event](./typing-game/README.md)

### ⚡ **Apa yang Bisa Anda Lakukan dalam 5 Menit Berikutnya**
- [ ] Buka konsol browser Anda dan coba mendengarkan event keyboard dengan `addEventListener`
- [ ] Buat halaman HTML sederhana dengan bidang input dan uji deteksi pengetikan
- [ ] Latih manipulasi string dengan membandingkan teks yang diketik dengan teks target
- [ ] Bereksperimen dengan `setTimeout` untuk memahami fungsi pengaturan waktu

### 🎯 **Apa yang Bisa Anda Capai dalam Satu Jam**
- [ ] Selesaikan kuis pasca-pelajaran dan pahami pemrograman berbasis event
- [ ] Bangun versi dasar game mengetik dengan validasi kata
- [ ] Tambahkan umpan balik visual untuk pengetikan yang benar dan salah
- [ ] Implementasikan sistem skor sederhana berdasarkan kecepatan dan akurasi
- [ ] Gaya game Anda dengan CSS agar terlihat menarik

### 📅 **Pengembangan Game Anda Selama Seminggu**
- [ ] Selesaikan game mengetik lengkap dengan semua fitur dan penyempurnaan
- [ ] Tambahkan tingkat kesulitan dengan kompleksitas kata yang bervariasi
- [ ] Implementasikan pelacakan statistik pengguna (WPM, akurasi dari waktu ke waktu)
- [ ] Buat efek suara dan animasi untuk pengalaman pengguna yang lebih baik
- [ ] Jadikan game Anda responsif untuk perangkat sentuh
- [ ] Bagikan game Anda secara online dan kumpulkan umpan balik dari pengguna

### 🌟 **Pengembangan Interaktif Anda Selama Sebulan**
- [ ] Bangun beberapa game yang mengeksplorasi pola interaksi yang berbeda
- [ ] Pelajari tentang loop game, manajemen status, dan optimasi performa
- [ ] Berkontribusi pada proyek pengembangan game open source
- [ ] Kuasai konsep pengaturan waktu lanjutan dan animasi yang halus
- [ ] Buat portofolio yang menampilkan berbagai aplikasi interaktif
- [ ] Bimbing orang lain yang tertarik pada pengembangan game dan interaksi pengguna

## 🎯 Garis Waktu Penguasaan Game Mengetik Anda

```mermaid
timeline
    title Game Development Learning Progression
    
    section Setup (10 minutes)
        Project Structure: HTML foundation
                         : CSS styling setup
                         : JavaScript file creation
        
    section User Interface (20 minutes)
        Interactive Elements: Input fields
                            : Button controls
                            : Display areas
                            : Responsive layout
        
    section Event Handling (25 minutes)
        User Interaction: Keyboard events
                        : Mouse events
                        : Real-time feedback
                        : State management
        
    section Game Logic (30 minutes)
        Core Functionality: Quote generation
                          : Character comparison
                          : Accuracy calculation
                          : Timer implementation
        
    section Performance Tracking (35 minutes)
        Metrics & Analytics: WPM calculation
                           : Error tracking
                           : Progress visualization
                           : Results display
        
    section Polish & Enhancement (45 minutes)
        User Experience: Visual feedback
                       : Sound effects
                       : Animations
                       : Accessibility features
        
    section Advanced Features (1 week)
        Extended Functionality: Difficulty levels
                              : Leaderboards
                              : Custom quotes
                              : Multiplayer options
        
    section Professional Skills (1 month)
        Game Development: Performance optimization
                        : Code architecture
                        : Testing strategies
                        : Deployment patterns
```

### 🛠️ Ringkasan Toolkit Pengembangan Game Anda

Setelah menyelesaikan proyek ini, Anda akan menguasai:
- **Pemrograman Berbasis Event**: Antarmuka pengguna responsif yang bereaksi terhadap input
- **Umpan Balik Real-Time**: Pembaruan visual dan performa instan
- **Pengukuran Performa**: Sistem pengaturan waktu dan skor yang akurat
- **Manajemen Status Game**: Mengontrol alur aplikasi dan pengalaman pengguna
- **Desain Interaktif**: Menciptakan pengalaman pengguna yang menarik dan adiktif
- **Web API Modern**: Memanfaatkan kemampuan browser untuk interaksi yang kaya
- **Pola Aksesibilitas**: Desain inklusif untuk semua pengguna

**Aplikasi Dunia Nyata**: Keterampilan ini langsung berlaku untuk:
- **Aplikasi Web**: Antarmuka interaktif atau dashboard
- **Perangkat Lunak Pendidikan**: Platform pembelajaran dan alat penilaian keterampilan
- **Alat Produktivitas**: Editor teks, IDE, dan perangkat kolaborasi
- **Industri Game**: Game browser dan hiburan interaktif
- **Pengembangan Mobile**: Antarmuka berbasis sentuhan dan penanganan gestur

**Tingkat Berikutnya**: Anda siap menjelajahi kerangka kerja game tingkat lanjut, sistem multipemain real-time, atau aplikasi interaktif yang kompleks!

## Kredit

Ditulis dengan ♥️ oleh [Christopher Harrison](http://www.twitter.com/geektrainer)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.