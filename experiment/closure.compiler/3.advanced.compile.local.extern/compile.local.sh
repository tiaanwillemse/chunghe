
LOCAL_FILE=./makeallnotes.js
EXTERNS=./externs.js
OUTPUT=makeallnotes.compiled.js
curl -d compilation_level=ADVANCED_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code --data-urlencode "js_code@${LOCAL_FILE}" --data-urlencode "js_externs@${EXTERNS}" http://closure-compiler.appspot.com/compile > $OUTPUT
