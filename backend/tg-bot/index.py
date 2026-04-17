import os
import json
import urllib.request

TELEGRAM_BOT_TOKEN = os.environ["TELEGRAM_BOT_TOKEN"]
TELEGRAM_API = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}"


def send_message(chat_id: int, text: str) -> None:
    """Отправляет сообщение в Telegram."""
    data = json.dumps({"chat_id": chat_id, "text": text}).encode()
    req = urllib.request.Request(
        f"{TELEGRAM_API}/sendMessage",
        data=data,
        headers={"Content-Type": "application/json"},
    )
    urllib.request.urlopen(req)


def handler(event: dict, context) -> dict:
    """Эхо-бот: получает сообщение от пользователя и отправляет его обратно."""
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
        message = body.get("message")

        if message:
            chat_id = message["chat"]["id"]
            text = message.get("text", "")
            if text:
                send_message(chat_id, text)

        return {"statusCode": 200, "headers": cors_headers, "body": {"ok": True}}
    except Exception as e:
        return {"statusCode": 200, "headers": cors_headers, "body": {"ok": False, "error": str(e)}}