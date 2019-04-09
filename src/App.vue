<template>
  <div id="app">
    <!-- Data props -->
    <!-- this works fine, but should put events... -->
    <TestVModelContainer>
      <TestVModel slot-scope="{ value, events }" :value="value" v-on="events"/>
    </TestVModelContainer>

    <hr>

    <!-- this does not works -->
    <TestVModelContainer>
      <TestVModel slot-scope="{ value }" v-model="value"/>
    </TestVModelContainer>

    <hr>

    <!-- this also does not works -->
    <TestVModelContainer>
      <div slot-scope="{ value }">
        {{ value }}
        <br>
        <input v-model="value" type="text">
      </div>
    </TestVModelContainer>

    <hr>

    <!-- Computed props -->
    <!-- this also does not works -->
    <TestVModelContainer>
      <TestVModel slot-scope="{ valueComputed }" v-model="valueComputed"/>
    </TestVModelContainer>
    <hr>

    <!-- this also does not works -->
    <TestVModelContainer>
      <div slot-scope="{ valueComputed }">
        {{ valueComputed }}
        <br>
        <input v-model="valueComputed" type="text">
      </div>
    </TestVModelContainer>

    <h3>Solution:</h3>
    <pre>Remember that when using `v-model="foo"`, somewhere in the js generated,
there will be a statement similar to `foo = newValue`, which wouldn't work
with a scoped-slot because you are creating some kind of local variables.
Exactly like in a `v-for`.
So variables created in different lexical enviroments (scope).</pre>
  </div>
</template>

<script>
import TestVModelContainer from "./components/TestVModelContainer";
import TestVModel from "./components/TestVModel";

export default {
  name: "App",
  components: {
    TestVModelContainer,
    TestVModel
  }
};
</script>
