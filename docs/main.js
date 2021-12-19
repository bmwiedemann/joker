function toggleTypes(e) {
  e.preventDefault(e);
  e.target.innerText = e.target.innerText === "hide types" ? "show types" : "hide types";
  e.target.parentNode.querySelectorAll('code').forEach(el => el.classList.toggle('hide'));
}

const terms = ["joker.base64/decode-string","joker.base64/encode-string","joker.better-cond/cond","joker.better-cond/if-let","joker.better-cond/if-some","joker.better-cond/when-let","joker.better-cond/when-some","joker.bolt/by-prefix","joker.bolt/close","joker.bolt/create-bucket","joker.bolt/create-bucket-if-not-exists","joker.bolt/delete","joker.bolt/delete-bucket","joker.bolt/get","joker.bolt/next-sequence","joker.bolt/open","joker.bolt/put","joker.core/*","joker.core/*'","joker.core/*1","joker.core/*2","joker.core/*3","joker.core/*assert*","joker.core/*command-line-args*","joker.core/*e","joker.core/*err*","joker.core/*file*","joker.core/*flush-on-newline*","joker.core/*in*","joker.core/*joker-version*","joker.core/*linter-config*","joker.core/*linter-mode*","joker.core/*main-file*","joker.core/*ns*","joker.core/*out*","joker.core/*print-readably*","joker.core/+","joker.core/+'","joker.core/-","joker.core/-'","joker.core/->","joker.core/->>","joker.core//","joker.core/<","joker.core/<!","joker.core/<=","joker.core/=","joker.core/==","joker.core/>","joker.core/>!","joker.core/>=","joker.core/alias","joker.core/all-ns","joker.core/alter-meta!","joker.core/and","joker.core/any?","joker.core/apply","joker.core/array-map","joker.core/as->","joker.core/assert","joker.core/assoc","joker.core/assoc-in","joker.core/associative?","joker.core/atom","joker.core/bigfloat","joker.core/bigfloat?","joker.core/bigint","joker.core/binding","joker.core/bit-and","joker.core/bit-and-not","joker.core/bit-clear","joker.core/bit-flip","joker.core/bit-not","joker.core/bit-or","joker.core/bit-set","joker.core/bit-shift-left","joker.core/bit-shift-right","joker.core/bit-test","joker.core/bit-xor","joker.core/boolean","joker.core/boolean?","joker.core/bound?","joker.core/bounded-count","joker.core/butlast","joker.core/callable?","joker.core/case","joker.core/cast","joker.core/chan","joker.core/char","joker.core/char?","joker.core/chunked-seq?","joker.core/class","joker.core/close!","joker.core/coll?","joker.core/comment","joker.core/comp","joker.core/compare","joker.core/complement","joker.core/concat","joker.core/cond","joker.core/cond->","joker.core/cond->>","joker.core/condp","joker.core/conj","joker.core/cons","joker.core/constantly","joker.core/contains?","joker.core/count","joker.core/counted?","joker.core/create-ns","joker.core/cycle","joker.core/dec","joker.core/dec'","joker.core/declare","joker.core/dedupe","joker.core/default-data-readers","joker.core/defmacro","joker.core/defmethod","joker.core/defmulti","joker.core/defn","joker.core/defn-","joker.core/defonce","joker.core/delay","joker.core/delay?","joker.core/denominator","joker.core/deref","joker.core/disj","joker.core/dissoc","joker.core/distinct","joker.core/distinct?","joker.core/doall","joker.core/dorun","joker.core/doseq","joker.core/dotimes","joker.core/doto","joker.core/double","joker.core/double?","joker.core/drop","joker.core/drop-last","joker.core/drop-while","joker.core/empty","joker.core/empty?","joker.core/eval","joker.core/even?","joker.core/every-pred","joker.core/every?","joker.core/ex-cause","joker.core/ex-data","joker.core/ex-info","joker.core/ex-message","joker.core/exit","joker.core/false?","joker.core/ffirst","joker.core/filter","joker.core/filterv","joker.core/find","joker.core/find-ns","joker.core/find-var","joker.core/first","joker.core/flatten","joker.core/float?","joker.core/flush","joker.core/fn","joker.core/fn?","joker.core/fnext","joker.core/fnil","joker.core/for","joker.core/force","joker.core/format","joker.core/frequencies","joker.core/gensym","joker.core/get","joker.core/get-in","joker.core/get-method","joker.core/go","joker.core/group-by","joker.core/hash","joker.core/hash-map","joker.core/hash-set","joker.core/ident?","joker.core/identical?","joker.core/identity","joker.core/if-let","joker.core/if-not","joker.core/if-some","joker.core/in-ns","joker.core/inc","joker.core/inc'","joker.core/indexed?","joker.core/instance?","joker.core/int","joker.core/int?","joker.core/integer?","joker.core/interleave","joker.core/intern","joker.core/interpose","joker.core/into","joker.core/iterate","joker.core/joker-version","joker.core/juxt","joker.core/keep","joker.core/keep-indexed","joker.core/key","joker.core/keys","joker.core/keyword","joker.core/keyword?","joker.core/last","joker.core/lazy-cat","joker.core/lazy-seq","joker.core/let","joker.core/letfn","joker.core/line-seq","joker.core/list","joker.core/list*","joker.core/list?","joker.core/load","joker.core/load-file","joker.core/load-string","joker.core/loaded-libs","joker.core/loop","joker.core/macroexpand","joker.core/macroexpand-1","joker.core/map","joker.core/map-indexed","joker.core/map?","joker.core/mapcat","joker.core/mapv","joker.core/max","joker.core/max-key","joker.core/memoize","joker.core/merge","joker.core/merge-with","joker.core/meta","joker.core/methods","joker.core/min","joker.core/min-key","joker.core/mod","joker.core/name","joker.core/namespace","joker.core/nat-int?","joker.core/neg-int?","joker.core/neg?","joker.core/newline","joker.core/next","joker.core/nfirst","joker.core/nil?","joker.core/nnext","joker.core/not","joker.core/not-any?","joker.core/not-empty","joker.core/not-every?","joker.core/not=","joker.core/ns","joker.core/ns-aliases","joker.core/ns-interns","joker.core/ns-map","joker.core/ns-name","joker.core/ns-publics","joker.core/ns-refers","joker.core/ns-resolve","joker.core/ns-sources","joker.core/ns-unalias","joker.core/ns-unmap","joker.core/nth","joker.core/nthnext","joker.core/nthrest","joker.core/num","joker.core/number?","joker.core/numerator","joker.core/odd?","joker.core/or","joker.core/partial","joker.core/partition","joker.core/partition-all","joker.core/partition-by","joker.core/peek","joker.core/pop","joker.core/pos-int?","joker.core/pos?","joker.core/pprint","joker.core/pr","joker.core/pr-err","joker.core/pr-str","joker.core/prefer-method","joker.core/prefers","joker.core/print","joker.core/print-err","joker.core/print-str","joker.core/printf","joker.core/println","joker.core/println-err","joker.core/println-str","joker.core/prn","joker.core/prn-err","joker.core/prn-str","joker.core/qualified-ident?","joker.core/qualified-keyword?","joker.core/qualified-symbol?","joker.core/quot","joker.core/rand","joker.core/rand-int","joker.core/rand-nth","joker.core/random-sample","joker.core/range","joker.core/ratio?","joker.core/rational?","joker.core/re-find","joker.core/re-matches","joker.core/re-pattern","joker.core/re-seq","joker.core/read","joker.core/read-line","joker.core/read-string","joker.core/realized?","joker.core/reduce","joker.core/reduce-kv","joker.core/reductions","joker.core/refer","joker.core/refer-clojure","joker.core/rem","joker.core/remove","joker.core/remove-all-methods","joker.core/remove-method","joker.core/remove-ns","joker.core/repeat","joker.core/repeatedly","joker.core/replace","joker.core/require","joker.core/requiring-resolve","joker.core/reset!","joker.core/reset-meta!","joker.core/reset-vals!","joker.core/resolve","joker.core/rest","joker.core/reverse","joker.core/reversible?","joker.core/rseq","joker.core/run!","joker.core/second","joker.core/select-keys","joker.core/seq","joker.core/seq?","joker.core/seqable?","joker.core/sequence","joker.core/sequential?","joker.core/set","joker.core/set?","joker.core/shuffle","joker.core/simple-ident?","joker.core/simple-keyword?","joker.core/simple-symbol?","joker.core/slurp","joker.core/some","joker.core/some->","joker.core/some->>","joker.core/some-fn","joker.core/some?","joker.core/sort","joker.core/sort-by","joker.core/special-symbol?","joker.core/spit","joker.core/split-at","joker.core/split-with","joker.core/str","joker.core/string?","joker.core/subs","joker.core/subvec","joker.core/swap!","joker.core/swap-vals!","joker.core/symbol","joker.core/symbol?","joker.core/take","joker.core/take-last","joker.core/take-nth","joker.core/take-while","joker.core/test","joker.core/the-ns","joker.core/time","joker.core/trampoline","joker.core/tree-seq","joker.core/true?","joker.core/type","joker.core/unsigned-bit-shift-right","joker.core/update","joker.core/update-in","joker.core/use","joker.core/val","joker.core/vals","joker.core/var-get","joker.core/var-set","joker.core/var?","joker.core/vary-meta","joker.core/vec","joker.core/vector","joker.core/vector?","joker.core/when","joker.core/when-first","joker.core/when-let","joker.core/when-not","joker.core/when-some","joker.core/while","joker.core/with-bindings","joker.core/with-bindings*","joker.core/with-in-str","joker.core/with-meta","joker.core/with-out-str","joker.core/with-redefs","joker.core/with-redefs-fn","joker.core/xml-seq","joker.core/zero?","joker.core/zipmap","joker.crypto/hmac","joker.crypto/md5","joker.crypto/sha1","joker.crypto/sha224","joker.crypto/sha256","joker.crypto/sha384","joker.crypto/sha512","joker.crypto/sha512-224","joker.crypto/sha512-256","joker.csv/csv-seq","joker.csv/write","joker.csv/write-string","joker.filepath/abs","joker.filepath/abs?","joker.filepath/base","joker.filepath/clean","joker.filepath/dir","joker.filepath/eval-symlinks","joker.filepath/ext","joker.filepath/file-seq","joker.filepath/from-slash","joker.filepath/glob","joker.filepath/join","joker.filepath/list-separator","joker.filepath/matches?","joker.filepath/rel","joker.filepath/separator","joker.filepath/split","joker.filepath/split-list","joker.filepath/to-slash","joker.filepath/volume-name","joker.hex/decode-string","joker.hex/encode-string","joker.hiccup/html","joker.hiccup/raw-string","joker.html/escape","joker.html/unescape","joker.http/send","joker.http/start-file-server","joker.http/start-server","joker.io/close","joker.io/copy","joker.io/pipe","joker.json/json-seq","joker.json/read-string","joker.json/write-string","joker.markdown/convert-string","joker.math/abs","joker.math/ceil","joker.math/copy-sign","joker.math/cos","joker.math/cube-root","joker.math/dim","joker.math/e","joker.math/exp","joker.math/exp-2","joker.math/exp-minus-1","joker.math/floor","joker.math/hypot","joker.math/inf","joker.math/inf?","joker.math/ln-of-10","joker.math/ln-of-2","joker.math/log","joker.math/log-10","joker.math/log-10-of-e","joker.math/log-2","joker.math/log-2-of-e","joker.math/log-binary","joker.math/log-plus-1","joker.math/max-double","joker.math/modf","joker.math/nan","joker.math/nan?","joker.math/next-after","joker.math/phi","joker.math/pi","joker.math/pow","joker.math/pow-10","joker.math/precision","joker.math/round","joker.math/round-to-even","joker.math/set-precision","joker.math/sign-bit","joker.math/sin","joker.math/smallest-nonzero-double","joker.math/sqrt","joker.math/sqrt-of-2","joker.math/sqrt-of-e","joker.math/sqrt-of-phi","joker.math/sqrt-of-pi","joker.math/trunc","joker.os/args","joker.os/chdir","joker.os/chmod","joker.os/chown","joker.os/chtimes","joker.os/clearenv","joker.os/close","joker.os/create","joker.os/create-temp","joker.os/cwd","joker.os/egid","joker.os/env","joker.os/euid","joker.os/exec","joker.os/executable","joker.os/exists?","joker.os/exit","joker.os/expand-env","joker.os/get-env","joker.os/gid","joker.os/groups","joker.os/hostname","joker.os/lchown","joker.os/link","joker.os/ls","joker.os/lstat","joker.os/mkdir","joker.os/mkdir-all","joker.os/mkdir-temp","joker.os/open","joker.os/pagesize","joker.os/path-separator?","joker.os/pid","joker.os/ppid","joker.os/read-link","joker.os/remove","joker.os/remove-all","joker.os/rename","joker.os/set-env","joker.os/sh","joker.os/sh-from","joker.os/stat","joker.os/symlink","joker.os/temp-dir","joker.os/truncate","joker.os/uid","joker.os/unset-env","joker.os/user-cache-dir","joker.os/user-config-dir","joker.os/user-home-dir","joker.pprint/print-table","joker.repl/apropos","joker.repl/dir","joker.repl/dir-fn","joker.repl/doc","joker.runtime/go-root","joker.runtime/go-version","joker.runtime/joker-version","joker.set/difference","joker.set/index","joker.set/intersection","joker.set/join","joker.set/map-invert","joker.set/project","joker.set/rename","joker.set/rename-keys","joker.set/select","joker.set/subset?","joker.set/superset?","joker.set/union","joker.strconv/atoi","joker.strconv/can-backquote?","joker.strconv/format-bool","joker.strconv/format-double","joker.strconv/format-int","joker.strconv/graphic?","joker.strconv/itoa","joker.strconv/parse-bool","joker.strconv/parse-double","joker.strconv/parse-int","joker.strconv/printable?","joker.strconv/quote","joker.strconv/quote-char","joker.strconv/quote-char-to-ascii","joker.strconv/quote-char-to-graphic","joker.strconv/quote-to-ascii","joker.strconv/quote-to-graphic","joker.strconv/unquote","joker.string/blank?","joker.string/capitalize","joker.string/ends-with?","joker.string/escape","joker.string/includes?","joker.string/index-of","joker.string/join","joker.string/last-index-of","joker.string/lower-case","joker.string/pad-left","joker.string/pad-right","joker.string/re-quote","joker.string/replace","joker.string/replace-first","joker.string/reverse","joker.string/split","joker.string/split-lines","joker.string/starts-with?","joker.string/trim","joker.string/trim-left","joker.string/trim-newline","joker.string/trim-right","joker.string/triml","joker.string/trimr","joker.string/upper-case","joker.template/apply-template","joker.template/do-template","joker.test/*initial-report-counters*","joker.test/*load-tests*","joker.test/*report-counters*","joker.test/*stack-trace-depth*","joker.test/*test-out*","joker.test/*testing-contexts*","joker.test/*testing-vars*","joker.test/are","joker.test/assert-any","joker.test/assert-expr","joker.test/assert-predicate","joker.test/compose-fixtures","joker.test/deftest","joker.test/deftest-","joker.test/do-report","joker.test/function?","joker.test/get-possibly-unbound-var","joker.test/inc-report-counter","joker.test/is","joker.test/join-fixtures","joker.test/report","joker.test/run-all-tests","joker.test/run-tests","joker.test/set-test","joker.test/successful?","joker.test/test-all-vars","joker.test/test-ns","joker.test/test-var","joker.test/test-vars","joker.test/testing","joker.test/testing-contexts-str","joker.test/testing-vars-str","joker.test/try-expr","joker.test/use-fixtures","joker.test/with-test","joker.test/with-test-out","joker.time/add","joker.time/add-date","joker.time/ansi-c","joker.time/format","joker.time/from-unix","joker.time/hour","joker.time/hours","joker.time/in-timezone","joker.time/kitchen","joker.time/microsecond","joker.time/millisecond","joker.time/minute","joker.time/minutes","joker.time/nanosecond","joker.time/now","joker.time/parse","joker.time/parse-duration","joker.time/rfc1123","joker.time/rfc1123-z","joker.time/rfc3339","joker.time/rfc3339-nano","joker.time/rfc822","joker.time/rfc822-z","joker.time/rfc850","joker.time/round","joker.time/ruby-date","joker.time/second","joker.time/seconds","joker.time/since","joker.time/sleep","joker.time/stamp","joker.time/stamp-micro","joker.time/stamp-milli","joker.time/stamp-nano","joker.time/string","joker.time/sub","joker.time/truncate","joker.time/unix","joker.time/unix-date","joker.time/until","joker.tools.cli/format-lines","joker.tools.cli/get-default-options","joker.tools.cli/make-summary-part","joker.tools.cli/parse-opts","joker.tools.cli/summarize","joker.url/path-escape","joker.url/path-unescape","joker.url/query-escape","joker.url/query-unescape","joker.uuid/new","joker.walk/keywordize-keys","joker.walk/macroexpand-all","joker.walk/postwalk","joker.walk/postwalk-demo","joker.walk/postwalk-replace","joker.walk/prewalk","joker.walk/prewalk-demo","joker.walk/prewalk-replace","joker.walk/stringify-keys","joker.walk/walk","joker.yaml/read-string","joker.yaml/write-string"];

const els = document.querySelectorAll('a.types');
els.forEach(el => el.addEventListener('click', toggleTypes));


(() => {

	let selectedIndex = 0;

	function onMouseOver(e) {
		const i = parseInt(e.target.dataset.index);
		if (!isNaN(i)) {
			updateSelection(i);
		}
	}

	function onInput(e) {
		searchSuggestionsEl.classList.add('hide');
		if (e.target.value.match(/^\s*$/)) {
			return;
		}
		let suggestions = [];
		for (i = 0; i < terms.length; i++) {
			if (terms[i].includes(e.target.value)) {
				if (suggestions.push(terms[i]) >= 20) break;
			}
		}
		if (suggestions.length != 0) {
			searchSuggestionsEl.innerHTML = suggestions.map((term, i) => '<li data-index="' + i + '">'+ term + '</li>').join('');
			searchSuggestionsEl.querySelectorAll('li').forEach(el => {
				el.addEventListener('mouseover', onMouseOver);
				el.addEventListener('click', submitSearch);
			});
			searchSuggestionsEl.classList.remove('hide');
			updateSelection(0);
		}
	}

	function updateSelection(newIndex) {
		let items = searchSuggestionsEl.querySelectorAll('li');
		if (newIndex < 0 || newIndex >= items.length) {
			return;
		}
		if (items[selectedIndex]) {
			items[selectedIndex].classList.remove('selected');
		}
		items[newIndex].classList.add('selected');
		selectedIndex = newIndex;
	}

	function submitSearch() {
		let items = searchSuggestionsEl.querySelectorAll('li');
		if (items.length == 0) {
			return;
		}
		const url = items[selectedIndex].innerText.replace('/', '.html#');
		document.location = url;
	}

	function onKeydown(e) {
		if (e.keyCode == 38 || (e.ctrlKey && e.key == 'p')) { // up arrow or CTRL+p
			e.preventDefault();
			updateSelection(selectedIndex - 1);
		} else if (e.keyCode == 40 || (e.ctrlKey && e.key == 'n')) { // down arrow or CTRL+n
			e.preventDefault();
			updateSelection(selectedIndex + 1);
		} else if (e.keyCode == 13) { // enter
			submitSearch();
		}
	}

	const searchSuggestionsEl = document.getElementById('search-suggestions');
	const searchInputEl = document.getElementById('search-input');
	searchInputEl.addEventListener('input', onInput);
	searchInputEl.addEventListener('keydown', onKeydown);
})();
