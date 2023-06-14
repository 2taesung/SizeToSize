#!/bin/sh

yarn install
yarn build
if [ $? -eq 0 ];then
    # 명령어 성공시
    echo "build successfully!"
    yarn start
else
    # 명령어 실패시
    echo "build failed!"
    exit 1
fi
