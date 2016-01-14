from server import app as application

if __name__ == '__main__':
    application.run(host='0', port=4444, debug=True)
