.PHONY: check-rules-are-up-to-date
check-rules-are-up-to-date:
	node ./scripts/print-all-rules.js
	git status | grep "rules"; test $$? -eq 1
