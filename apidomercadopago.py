import mercadopago

def gerar_link_pagamento():
    sdk = mercadopago.SDK("TEST-2150880207111755-112313-d8071f0e17779c4c80d516030f19f3bf-677987965")

    payment_data = {
        "items": [
            {"id": "1", "title": "ACAMP", "quantity": 1, "currency_id": "BRL", "unit_price": 1}
        ],
        "back_urls": {
            "success": "http://127.0.0.1:5000/compracerta",
            "failure": "http://127.0.0.1:5000/compraerrada",
            "pending": "http://127.0.0.1:5000/compraerrada",
        },
        "auto_return": "all"
    }
    result = sdk.preference().create(payment_data)
    payment = result["response"]
    link_iniciar_pagamento = payment["init_point"]
    return link_iniciar_pagamento