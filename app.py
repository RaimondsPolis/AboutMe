from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/kontakti')
def kontakti():
    return render_template('kontakti.html')

@app.route('/projekti')
def projekti():
    return render_template('projekti.html')

if __name__ == '__main__':
    app.run(debug=True)
