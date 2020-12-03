octopus-server
====
    八爪鱼ts 基础项目集成了单元测试框架mocha,方便编写项目用例。


## install
``` shell
    yarn
    # or
    npm  i
```

##  如何编写测试用例

参考test文件方式进行开发,
测试用例必须放置在test目录下，以 `test.ts` 结尾


## 生成测试报告

```shell
    npm run report 
```

## 运行单个测试用例

```shell
    npx mocha --grep 用例describe名称
```