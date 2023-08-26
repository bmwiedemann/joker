// This file is generated by generate-std.joke script. Do not edit manually!

package git

import (
	"fmt"
	. "github.com/candid82/joker/core"
	"os"
)

func InternsOrThunks() {
	if VerbosityLevel > 0 {
		fmt.Fprintln(os.Stderr, "Lazily running slow version of git.InternsOrThunks().")
	}
	gitNamespace.ResetMeta(MakeMeta(nil, `Provides API for accessing and manipulating git repositories.`, "1.0"))

	gitNamespace.InternVar("add-commit", add_commit_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("repo"), MakeSymbol("msg"), MakeSymbol("opts"))),
			`Stores the current contents of the index in a new commit along with
   a log message from the user describing the changes.`, "1.4").Plus(MakeKeyword("tag"), String{S: "String"}))

	gitNamespace.InternVar("add-path", add_path_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("repo"), MakeSymbol("path"))),
			`Adds the file contents of a file in the worktree to the index. If the
   file is already staged in the index no error is thrown. If a file deleted
   from the workspace is given, the file is removed from the index. If a
   directory given, adds the files and all his sub-directories recursively in
   the worktree to the index. If any of the files is already staged in the index
   no error is thrown. When path is a file, the hash is returned.`, "1.4").Plus(MakeKeyword("tag"), String{S: "String"}))

	gitNamespace.InternVar("commit", commit_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("repo"), MakeSymbol("hash"))),
			`Returns a commit with the given hash.`, "1.3"))

	gitNamespace.InternVar("config", config_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("repo"))),
			`Returns git repo's config`, "1.3"))

	gitNamespace.InternVar("head", head_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("repo"))),
			`Returns the reference where HEAD is pointing to.`, "1.3"))

	gitNamespace.InternVar("log", log_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("repo"), MakeSymbol("opts"))),
			`Returns the commit history from the given opts.
  opts may have the following keys:

  :from - when the from option is set the log will only contain commits
  reachable from it. If this option is not set, HEAD will be used as
  the default from.

  :order - the default traversal algorithm is depth-first search.
  Set order to :committer-time for ordering by committer time (more compatible with `+"`"+`git log`+"`"+`).
  Set order to :bsf for breadth-first search

  :path-filter - filter commits based on the path of files that are updated.
  Takes file path as argument and should return true if the file is desired.
  It can be used to implement `+"`"+`git log -- <path>`+"`"+`.
  Either <path> is a file path, or directory path, or a regexp of file/directory path.

  :all - pretend as if all the refs in refs/, along with HEAD, are listed on the command line as <commit>.
  It is equivalent to running `+"`"+`git log --all`+"`"+`.
  If set to true, the :from option will be ignored.

  :since - show commits more recent than a specific date.
  It is equivalent to running `+"`"+`git log --since <date>`+"`"+` or `+"`"+`git log --after <date>`+"`"+`.

  :until - show commits older than a specific date.
  It is equivalent to running `+"`"+`git log --until <date>`+"`"+` or `+"`"+`git log --before <date>`+"`"+`.
`, "1.3"))

	gitNamespace.InternVar("object", object_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("repo"), MakeSymbol("hash"))),
			`Returns an Object with the given hash.`, "1.3"))

	gitNamespace.InternVar("open", open_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("path"))),
			`Opens a git repository from the given path. It detects if the
   repository is bare or a normal one. Throws an error if the path doesn't contain a valid repository.`, "1.3").Plus(MakeKeyword("tag"), String{S: "GitRepo"}))

	gitNamespace.InternVar("ref", ref_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("repo"), MakeSymbol("name"), MakeSymbol("resolved"))),
			`Returns the reference for a given reference name. If resolved is
   true, any symbolic reference will be resolved.`, "1.3"))

	gitNamespace.InternVar("resolve-revision", resolve_revision_,
		MakeMeta(
			NewListFrom(NewVectorFrom(MakeSymbol("repo"), MakeSymbol("revision"))),
			`Resolves revision to corresponding hash. It will always
   resolve to a commit hash, not a tree or annotated tag.`, "1.3").Plus(MakeKeyword("tag"), String{S: "String"}))

}
