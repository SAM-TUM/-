from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# 現在のディレクトリパスを取得して、SQLiteデータベースをそのディレクトリに保存
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'survey.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# アンケート結果を保存するテーブルのモデルを定義
class SurveyResponse(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    feedback = db.Column(db.Text, nullable=False)

# テーブルを作成
with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    age = request.form['age']
    feedback = request.form['feedback']
    
    # データベースに保存
    response = SurveyResponse(name=name, age=age, feedback=feedback)
    db.session.add(response)
    db.session.commit()
    
    return redirect(url_for('thank_you'))

@app.route('/thank_you')
def thank_you():
    return render_template('thank_you.html')

@app.route('/results')
def results():
    # データベースから全てのアンケート結果を取得
    responses = SurveyResponse.query.all()
    return render_template('results.html', responses=responses)

if __name__ == '__main__':
    app.run(debug=True)
