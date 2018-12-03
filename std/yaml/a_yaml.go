// This file is generated by generate-std.joke script. Do not edit manually!

package yaml

import (
	. "github.com/candid82/joker/core"
)

var yamlNamespace = GLOBAL_ENV.EnsureNamespace(MakeSymbol("joker.yaml"))

var read_string_ Proc = func(args []Object) Object {
	c := len(args)
	switch {
	case c == 1:

		s := ExtractString(args, 0)
		res := readString(s)
		return res

	default:
		PanicArity(c)
	}
	return NIL
}

var write_string_ Proc = func(args []Object) Object {
	c := len(args)
	switch {
	case c == 1:

		v := ExtractObject(args, 0)
		res := writeString(v)
		return res

	default:
		PanicArity(c)
	}
	return NIL
}

func init() {

	yamlNamespace.ResetMeta(MakeMeta(nil, "Implements encoding and decoding of YAML.", "1.0"))

	yamlNamespace.InternVar("read-string", read_string_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("s"))),
			`Parses the YAML-encoded data and return the result as a Joker value.`, "1.0"))

	yamlNamespace.InternVar("write-string", write_string_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("v"))),
			`Returns the YAML encoding of v.`, "1.0"))

}
