
LOCAL_LIB=./lib.js
LOCAL_FILE=./script.js
OUTPUT=compiled.js
curl -d compilation_level=ADVANCED_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code --data-urlencode "js_code@${LOCAL_LIB}" --data-urlencode "js_code@${LOCAL_FILE}" http://closure-compiler.appspot.com/compile > $OUTPUT
