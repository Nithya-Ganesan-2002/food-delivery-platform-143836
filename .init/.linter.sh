#!/bin/bash
cd /home/kavia/workspace/code-generation/food-delivery-platform-143836/api_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

