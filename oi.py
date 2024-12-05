from flask import Flask, render_template, redirect, jsonify
from apidomercadopago import gerar_link_pagamento
import json
import os

app = Flask(__name__)

# Caminho para o arquivo JSON
JSON_FILE = "pagamentos.json"

# Função para inicializar o arquivo JSON, caso não exista
def inicializar_json():
    if not os.path.exists(JSON_FILE):
        with open(JSON_FILE, "w") as f:
            json.dump({"contador_pagamentos": 0}, f)

# Função para atualizar o contador de pagamentos
def registrar_pagamento():
    try:
        with open(JSON_FILE, "r+") as f:
            data = json.load(f)
            data["contador_pagamentos"] += 1
            f.seek(0)
            json.dump(data, f, indent=4)
            f.truncate()  # Remove o excesso de dados antigos
    except Exception as e:
        print(f"Erro ao atualizar o JSON: {e}")

# Rota para visualizar o contador de pagamentos
@app.route("/contador-pagamentos")
def contador_pagamentos():
    try:
        with open(JSON_FILE, "r") as f:
            data = json.load(f)
        return jsonify({"contador": data.get("contador_pagamentos", 0)}), 200
    except Exception as e:
        print(f"Erro ao ler o JSON: {e}")
        return jsonify({"contador": 0, "erro": str(e)}), 500



@app.route("/pagamento")
def pagamento():
    try:
        link_iniciar_pagamento = gerar_link_pagamento()
        return render_template("pagamento.html", link_pagamento=link_iniciar_pagamento)
    except Exception as e:
        print(f"Erro ao gerar link de pagamento: {e}")
        return render_template("erro.html", mensagem="Erro ao gerar link de pagamento.")


# Rota da homepage
@app.route("/")
def homepage():
    return render_template("index.html")

# Demais rotas
@app.route("/escolha")
def escolha():
    return render_template("Escolha.html")

@app.route("/inscricao")
def inscricao():
    return render_template("inscricao.html")

@app.route("/escolhaconv")
def escolhaconv():
    return render_template("escolhaconv.html")

@app.route("/comeca")
def comeca():
    return render_template("comeca.html")

@app.route("/igreja")
def igreja():
    return render_template("igreja.html")








# Rota chamada após pagamento bem-sucedido
@app.route("/compracerta")
def compra_certa():
    try:
        registrar_pagamento()  # Atualiza o contador no JSON
        return render_template("compracerta.html")
    except Exception as e:
        print(f"Erro ao registrar pagamento: {e}")
        return render_template("erro.html", mensagem="Erro ao registrar pagamento.")

# Rota chamada após pagamento mal-sucedido
@app.route("/compraerrada")
def compra_errada():
    return render_template("compraerrada.html")

if __name__ == "__main__":
    inicializar_json()  # Inicializa o arquivo JSON, se necessário
    app.run(debug=True)
