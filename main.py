import os
import webapp2
#import template

class MainHandler(webapp2.RequestHandler):
  def get (self, filename = None):
    if filename is None or filename == '':
      filename = 'index.html'
      
    path = os.path.join (os.path.dirname (__file__), filename)
    if not os.path.exists(path):
      self.response.headers ['Content-Type'] = 'text/html'
      self.response.out.write ('<h1>404 Fail Whale...</h1>')
      return

    if filename.endswith('.html'):
      self.response.headers ['Content-Type'] = 'text/html'
    elif filename.endswith('.png'):
      self.response.headers ['Content-Type'] = 'image/png'
    elif filename.endswith('.jpg'):
      self.response.headers ['Content-Type'] = 'image/jpeg'
    else:
      self.response.headers ['Content-Type'] = 'application/binary'
      
    self.response.out.write (open(path).read())


app = webapp2.WSGIApplication([
  (r'/(.*)', MainHandler),
  ])

def main():
  run_wsgi_app(app)
  
