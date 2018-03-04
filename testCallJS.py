from Naked.toolshed.shell import execute_js, muterun_js
import sys

response = muterun_js('test.js')
if response.exitcode == 0:
  print(response.stdout)
else:
    print(response.stderr)

