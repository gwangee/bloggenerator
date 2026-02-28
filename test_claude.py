import anthropic
import os

client = anthropic.Anthropic(
    api_key=os.environ["ANTHROPIC_API_KEY"]
)

response = client.messages.create(
    model="claude-3-haiku-20240307",
    max_tokens=200,
    messages=[
        {"role": "user", "content": "파이썬으로 hello world 코드 보여줘"}
    ]
)

print(response.content[0].text)