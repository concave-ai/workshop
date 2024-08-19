export const ROOT_SYMBOLS =[
  {
    "name": "_pytest.capture.EncodedFile",
    "file_path": "src/_pytest/capture.py",
    "file_content": "class EncodedFile(object):\n    errors = \"strict\"  # possibly needed by py3 code (issue555)\n\n    def __init__(self, buffer, encoding):\n        self.buffer = buffer\n        self.encoding = encoding\n\n    def write(self, obj):\n        if isinstance(obj, six.text_type):\n            obj = obj.encode(self.encoding, \"replace\")\n        elif _PY3:\n            raise TypeError(\n                \"write() argument must be str, not {}\".format(type(obj).__name__)\n            )\n        self.buffer.write(obj)\n\n    def writelines(self, linelist):\n        data = \"\".join(linelist)\n        self.write(data)\n\n    @property\n    def name(self):\n        \"\"\"Ensure that file.name is a string.\"\"\"\n        return repr(self.buffer)\n\n    def __getattr__(self, name):\n        return getattr(object.__getattribute__(self, \"buffer\"), name)",
    "start_line": 424,
    "start_column": 14697,
    "end_line": 0,
    "end_column": 15508,
    "start_byte": 14697,
    "end_byte": 0
  },
  {
    "name": "_pytest.capture.EncodedFile.errors",
    "file_path": "src/_pytest/capture.py",
    "file_content": "errors = \"strict\"",
    "start_line": 425,
    "start_column": 14728,
    "end_line": 4,
    "end_column": 14745,
    "start_byte": 14728,
    "end_byte": 4
  },
  {
    "name": "_pytest.capture.EncodedFile.__init__",
    "file_path": "src/_pytest/capture.py",
    "file_content": "def __init__(self, buffer, encoding):\n        self.buffer = buffer\n        self.encoding = encoding",
    "start_line": 427,
    "start_column": 14793,
    "end_line": 4,
    "end_column": 14892,
    "start_byte": 14793,
    "end_byte": 4
  },
  {
    "name": "_pytest.capture.EncodedFile.write",
    "file_path": "src/_pytest/capture.py",
    "file_content": "def write(self, obj):\n        if isinstance(obj, six.text_type):\n            obj = obj.encode(self.encoding, \"replace\")\n        elif _PY3:\n            raise TypeError(\n                \"write() argument must be str, not {}\".format(type(obj).__name__)\n            )\n        self.buffer.write(obj)",
    "start_line": 431,
    "start_column": 14898,
    "end_line": 4,
    "end_column": 15192,
    "start_byte": 14898,
    "end_byte": 4
  },
  {
    "name": "_pytest.capture.EncodedFile.writelines",
    "file_path": "src/_pytest/capture.py",
    "file_content": "def writelines(self, linelist):\n        data = \"\".join(linelist)\n        self.write(data)",
    "start_line": 440,
    "start_column": 15198,
    "end_line": 4,
    "end_column": 15287,
    "start_byte": 15198,
    "end_byte": 4
  },
  {
    "name": "_pytest.capture.EncodedFile.name",
    "file_path": "src/_pytest/capture.py",
    "file_content": "@property\n    def name(self):\n        \"\"\"Ensure that file.name is a string.\"\"\"\n        return repr(self.buffer)",
    "start_line": 444,
    "start_column": 15293,
    "end_line": 4,
    "end_column": 15404,
    "start_byte": 15293,
    "end_byte": 4
  },
  {
    "name": "_pytest.capture.EncodedFile.__getattr__",
    "file_path": "src/_pytest/capture.py",
    "file_content": "def __getattr__(self, name):\n        return getattr(object.__getattribute__(self, \"buffer\"), name)",
    "start_line": 449,
    "start_column": 15410,
    "end_line": 4,
    "end_column": 15508,
    "start_byte": 15410,
    "end_byte": 4
  }
]
