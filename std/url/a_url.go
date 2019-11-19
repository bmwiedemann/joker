// This file is generated by generate-std.joke script. Do not edit manually!

package url

import (
	. "github.com/candid82/joker/core"
	"net/url"
)

var urlNamespace = GLOBAL_ENV.EnsureNamespace(MakeSymbol("joker.url"))



var path_escape_ ProcFn

func __path_escape_(_args []Object) Object {
	_c := len(_args)
	switch {
	case _c == 1:
		s := ExtractString(_args, 0)
		_res := url.PathEscape(s)
		return MakeString(_res)

	default:
		PanicArity(_c)
	}
	return NIL
}

var path_unescape_ ProcFn

func __path_unescape_(_args []Object) Object {
	_c := len(_args)
	switch {
	case _c == 1:
		s := ExtractString(_args, 0)
		_res := pathUnescape(s)
		return MakeString(_res)

	default:
		PanicArity(_c)
	}
	return NIL
}

var query_escape_ ProcFn

func __query_escape_(_args []Object) Object {
	_c := len(_args)
	switch {
	case _c == 1:
		s := ExtractString(_args, 0)
		_res := url.QueryEscape(s)
		return MakeString(_res)

	default:
		PanicArity(_c)
	}
	return NIL
}

var query_unescape_ ProcFn

func __query_unescape_(_args []Object) Object {
	_c := len(_args)
	switch {
	case _c == 1:
		s := ExtractString(_args, 0)
		_res := queryUnescape(s)
		return MakeString(_res)

	default:
		PanicArity(_c)
	}
	return NIL
}

func Init() {

	path_escape_ = __path_escape_
	path_unescape_ = __path_unescape_
	query_escape_ = __query_escape_
	query_unescape_ = __query_unescape_

	urlNamespace.ResetMeta(MakeMeta(nil, `Parses URLs and implements query escaping.`, "1.0"))

	
	urlNamespace.InternVar("path-escape", path_escape_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("s"))),
			`Escapes the string so it can be safely placed inside a URL path segment.`, "1.0").Plus(MakeKeyword("tag"), String{S: "String"}))

	urlNamespace.InternVar("path-unescape", path_unescape_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("s"))),
			`Does the inverse transformation of path-escape, converting each 3-byte encoded
  substring of the form "%AB" into the hex-decoded byte 0xAB. It also converts
  '+' into ' ' (space). It returns an error if any % is not followed by two hexadecimal digits.

  PathUnescape is identical to QueryUnescape except that it does not unescape '+' to ' ' (space).`, "1.0").Plus(MakeKeyword("tag"), String{S: "String"}))

	urlNamespace.InternVar("query-escape", query_escape_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("s"))),
			`Escapes the string so it can be safely placed inside a URL query.`, "1.0").Plus(MakeKeyword("tag"), String{S: "String"}))

	urlNamespace.InternVar("query-unescape", query_unescape_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("s"))),
			`Does the inverse transformation of query-escape, converting each 3-byte encoded
  substring of the form "%AB" into the hex-decoded byte 0xAB. It also converts
  '+' into ' ' (space). It returns an error if any % is not followed by two hexadecimal digits.`, "1.0").Plus(MakeKeyword("tag"), String{S: "String"}))

}

func init() {
	urlNamespace.Lazy = Init
}
