# pip install -qU "langchain[openai]"

from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

# works
response  = llm.invoke("What is 13 raised to the .3432 power?")
print(response.content)