from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# 仮のユーザー情報（性別情報を追加）
users = {}

@app.route('/')
def home():
    return "Welcome to the home page!"

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # ユーザーの認証
        if username in users and users[username]['password'] == password:
            gender = users[username]['gender']
            if gender == 'male':
                return redirect(url_for('male_home'))
            elif gender == 'female':
                return redirect(url_for('female_home'))
            else:
                return redirect(url_for('home'))
        else:
            return "Invalid credentials. Please try again."
    
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        gender = request.form['gender']
        
        if username in users:
            return "Username already exists. Please choose a different one."
        else:
            users[username] = {'password': password, 'gender': gender}
            return redirect(url_for('login'))
    
    return render_template('register.html')

@app.route('/male_home')
def male_home():
    return "Welcome to the male homepage!"

@app.route('/female_home')
def female_home():
    return "Welcome to the female homepage!"

if __name__ == '__main__':
    app.run(debug=True)
