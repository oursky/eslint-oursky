.PHONY: print-all-rules
print-all-rules:
	node ./scripts/print-all-rules/main.mjs
	git status | grep "rules"; test $$? -eq 1

.PHONY: check-all-rules-are-considered
check-all-rules-are-considered:
	node ./scripts/check-all-rules-are-considered.mjs
