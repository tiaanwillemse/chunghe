from google.appengine.api import urlfetch
import random


def process(s):
	#print s
	date = s.split('|')[0];
	time = s.split('|')[1];
	print '<meta http-equiv="content-type" content="text/html; charset=utf-8">'
	print date + ' ' + time
	rows = s.split('|')[2].split('#');

	print '<table cellspacing="2" cellpadding="5" border="1">'
	for row in rows:
		cols = row.split(';')
		print '<tr>'
		for col in sorted(cols):
			if col.find('col') == 0:
				print '<td>' + col.split('=')[1] + '</td>'
		print '</tr>'
	print '</table>'

print '' # must with this line, don't know why
url = "https://ebank.megabank.com.tw/global2/ExternalRateQuery?type=PRS2001&random=" + str(random.random())

result = urlfetch.fetch(url, method="GET")
if result.status_code == 200:
  process(result.content)
