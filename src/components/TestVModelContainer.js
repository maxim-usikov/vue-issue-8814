export default {
  name: 'TestVModelContainer',

  data() {
    return {
      value: 'test v-model',
    };
  },

  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.value = value;
      }
    }
  },

  methods: {
    handleInput(value) {
      this.value = value;
    },
  },

  render() {
    return this.$scopedSlots.default({
      value: this.value,
      valueComputed: this.valueComputed,
      events: {
        input: this.handleInput,
      },
    });
  },
};