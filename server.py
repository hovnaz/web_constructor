
from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO, send, emit

import os
from werkzeug.utils import secure_filename
import json







app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)







# Send request from server by socket in client
@socketio.on('Send')
def Send_cmd(message,code):

	print()
	print(message)
	print()

	# smash in parts list
	list_message = message.split()

	# keyword for request emit. Default value is 'Get ' and for code value is '_'
	SocketioEmitRequestKey = 'request'
	SocketioEmitRequest = '_'
	SocketioEmitRequestCode = '_'



	# with the help of list_message create new key for request

	
	if list_message[0] == 'EditZeroBlock':
		SocketioEmitRequest = message
		SocketioEmitRequestCode = code
	elif list_message[0] == 'EditZeroBlockSave':
		SocketioEmitRequest = message
		SocketioEmitRequestCode = code
	elif list_message[0] == 'EditZeroBlockRemove':
		SocketioEmitRequest = message
		SocketioEmitRequestCode = code
	# save project
	elif list_message[0] == 'SaveProject':
		html = code['html']
		manager = code['manager']
		with open('database/data-html.json', 'w') as outfile:
			outfile.write(html)

		with open('database/data-manager.json', 'w') as outfile:
			outfile.write(manager)


		return
	elif list_message[0] == 'OpenProject':
		SocketioEmitRequest = 'GetProject'
		html = ''
		manager = ''

		# with open('database/data-html.json', 'r') as reader:
		# 	html = reader.read()
		# with open('database/data-manager.json', 'r') as reader:
		# 	manager = reader.read()

		f = open("database/data-html.json", "r")
		html = f.read();
		f = open("database/data-manager.json", "r")
		manager = f.read();

		print(manager);


		code = {
			'html': html,
			'manager': manager,
		}

		SocketioEmitRequestCode = code 



	# Send request in classient
	socketio.emit(SocketioEmitRequestKey, [SocketioEmitRequest, SocketioEmitRequestCode])





@app.route('/')
def view():


	return render_template('ToolView/ToolView.html')


@app.route('/zero/')
def tool():

	return render_template('zero/zero.html')




# for restart static file content
@app.context_processor
def override_url_for():
	return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
	if endpoint == 'static':
		filename = values.get('filename', None)
		if filename:
			file_path = os.path.join(app.root_path,
								 endpoint, filename)
			values['q'] = int(os.stat(file_path).st_mtime)
	return url_for(endpoint, **values)










if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0',port=8000)
# ,port=80



# # ipconfig
