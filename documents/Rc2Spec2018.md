# Rc2 Spec

Rc2 offers simple, inututive interface for learning and working with data science. It uses cloud-based R. Swift Playgrounds for R.

# Use Cases

* Student
	* learn R by simple tutorials that are easy to step through
	* collaborare with classmates
	* experiment with R without the setup
* Teacher
	* preparse course work for students
	* have real-time class sessions with students
* Data Scientist prototyping/designing
	* Professionals often prototype in simipler apps

## documents
* custom file format that is not a single text file with delimiters
* docs contain chapters/sections which contain a worksheet
* resources embedded at any level and shared
* documents have a single R session tied to them
* results are cached so can be used read-only w/o server connection
* files are "resources" per document
* Allows double-clickable documents on desktop
* can embed remote audio/video

## hosting
* tied to iCloud, uses that for persistent storage/login
* accounts must support 2FA and saved tokens
* free trials for x time via app store
* have some kind of free usage in new documents tied to icloud account (if can be done via apple rules)

## editor
* source and rendered output showed in parallel with single scroll bar
* single editor for worksheets. no mode switching
* has init/close R code that can be automatically executed
* output is rendered real-time
* Code edits are sent to server for real parsing, fully enabled auto-complete and knowing if a statement is finished
* drag & drop variables from list
* all equations rendered as png, popup editor
* only inline display of variables, not arbitrary code
* exportable to rmd, jupyter notebook, html, pdf
* complete, persistent undo via git

## subscriptions
* can always read documents
* can always access documents owned by someone else
* free login/registration
* login token stored in icloud to allow automatic login across devices (or will shared keychain do that?)
* if not logged in, can create connections to a minimum instance of R with no persistance no service guarantees. Not shareable.
* logged in offers full access to X number of open documents, with X storage space and X cpu/memory usage
