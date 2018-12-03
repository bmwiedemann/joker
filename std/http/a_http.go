// This file is generated by generate-std.joke script. Do not edit manually!

package http

import (
	. "github.com/candid82/joker/core"
)

var httpNamespace = GLOBAL_ENV.EnsureNamespace(MakeSymbol("joker.http"))

var send_ Proc = func(args []Object) Object {
	c := len(args)
	switch {
	case c == 1:

		request := ExtractMap(args, 0)
		res := sendRequest(request)
		return res

	default:
		PanicArity(c)
	}
	return NIL
}

var start_file_server_ Proc = func(args []Object) Object {
	c := len(args)
	switch {
	case c == 2:

		addr := ExtractString(args, 0)
		root := ExtractString(args, 1)
		res := startFileServer(addr, root)
		return res

	default:
		PanicArity(c)
	}
	return NIL
}

var start_server_ Proc = func(args []Object) Object {
	c := len(args)
	switch {
	case c == 2:

		addr := ExtractString(args, 0)
		handler := ExtractCallable(args, 1)
		res := startServer(addr, handler)
		return res

	default:
		PanicArity(c)
	}
	return NIL
}

func init() {

	httpNamespace.ResetMeta(MakeMeta(nil, "Provides HTTP client and server implementations", "1.0"))

	httpNamespace.InternVar("send", send_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("request"))),
			`Sends an HTTP request and returns an HTTP response.
  request is a map with the following keys:
  - url (string)
  - method (string, keyword or symbol, defaults to :get)
  - body (string)
  - host (string, overrides Host header if provided)
  - headers (map).
  All keys except for url are optional.
  response is a map with the following keys:
  - status (int)
  - body (string)
  - headers (map)
  - content-length (int)`, "1.0"))

	httpNamespace.InternVar("start-file-server", start_file_server_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("addr"), MakeSymbol("root"))),
			`Starts HTTP server on the TCP network address addr that
  serves HTTP requests with the contents of the file system rooted at root.`, "1.0"))

	httpNamespace.InternVar("start-server", start_server_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("addr"), MakeSymbol("handler"))),
			`Starts HTTP server on the TCP network address addr.`, "1.0"))

}
