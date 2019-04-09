<template>
  <div>
    {{ value }}
    <br>
    <input
      :value="value"
      type="text"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'TestVModel',

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>