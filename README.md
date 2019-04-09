# vue-issue-8814

Update value from Renderless component through v-model

* [CodeSandbox](https://codesandbox.io/s/github/maxim-usikov/vue-issue-8814)
* [vue#8814](https://github.com/vuejs/vue/issues/8814)

# Solution
Remember that when using `v-model="foo"`, somewhere in the js generated,
there will be a statement similar to `foo = newValue`, which wouldn't work
with a scoped-slot because you are creating some kind of local variables.
Exactly like in a `v-for`.
So variables created in different lexical enviroments (scope).
