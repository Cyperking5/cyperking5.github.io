# Datei: bitcoin_trader.py
import requests
import time
import hmac
import hashlib
import logging
from datetime import datetime

# Binance API-Endpunkte
BASE_URL = "https://api.binance.com"
API_KEY = "DEIN_API_KEY"
API_SECRET = "DEIN_API_SECRET"

# Logging einrichten
logging.basicConfig(filename='trader.log', level=logging.INFO)

def get_price(symbol="BTCUSDT"):
    """Abrufen des aktuellen Bitcoin-Preises"""
    url = f"{BASE_URL}/api/v3/ticker/price?symbol={symbol}"
    response = requests.get(url)
    data = response.json()
    return float(data['price'])

def create_order(symbol, side, quantity):
    """Erstellt einen Kauf-/Verkaufsauftrag"""
    endpoint = "/api/v3/order"
    timestamp = int(time.time() * 1000)
    params = {
        "symbol": symbol,
        "side": side,
        "type": "MARKET",
        "quantity": quantity,
        "timestamp": timestamp
    }
    query_string = '&'.join([f"{k}={v}" for k, v in params.items()])
    signature = hmac.new(API_SECRET.encode(), query_string.encode(), hashlib.sha256).hexdigest()
    headers = {"X-MBX-APIKEY": API_KEY}
    params["signature"] = signature
    
    response = requests.post(f"{BASE_URL}{endpoint}", headers=headers, params=params)
    return response.json()

def main():
    balance = 100  # Startbalance in USD
    symbol = "BTCUSDT"
    quantity = 0.001  # Handelsmenge in BTC
    
    while True:
        try:
            price = get_price(symbol)
            logging.info(f"{datetime.now()} - Aktueller Preis: {price}")
            
            # Beispielstrategie: Kaufe, wenn Preis unter 30.000 USD
            if price < 30000:
                order = create_order(symbol, "BUY", quantity)
                logging.info(f"Kaufauftrag: {order}")
            
            # Verkaufe, wenn Preis über 40.000 USD
            elif price > 40000:
                order = create_order(symbol, "SELL", quantity)
                logging.info(f"Verkaufsauftrag: {order}")
            
            time.sleep(60)  # Alle 60 Sekunden aktualisieren
            
        except Exception as e:
            logging.error(f"Fehler: {e}")
            time.sleep(60)

if __name__ == "__main__":
    main()
