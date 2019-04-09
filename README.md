#Issue
Update value from Renderless component through v-model

- (github)[https://github.com/vuejs/vue/issues/8814]

#Solution
Remember that when using `v-model="foo"`, somewhere in the js generated,
there will be a statement similar to `foo = newValue`, which wouldn't work
with a scoped-slot because you are creating some kind of local variables.
Exactly like in a `v-for`.
So variables created in different lexical enviroments (scope).
