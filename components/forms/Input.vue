<template>
  <ValidationProvider
    v-slot="{ errors }"
    mode="eager"
    :rules="rules"
    :name="name"
  >
    <div class="input">
      <label
        class="input__label text-body-1"
        :for="name"
        >{{ label }}
        <span
          class="red--text"
          v-if="rules.includes('required')"
          >*</span
        >
      </label>
      <input
        :id="name"
        type="text"
        :name="name"
        class="input__field"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
      <span
        v-if="errors.length"
        class="input__error text-body-2"
        >{{ errors[0] }}</span
      >
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
export default {
  name: 'amei-input',
  components: {
    ValidationProvider,
  },
  model: {
    event: 'input',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
};
</script>

<style scoped lang="scss">
.input {
  display: grid;
  gap: 0.5rem;
  &__label,
  &__error {
    font-weight: 700;
    color: var(--v-body-base);
  }
  &__field {
    height: 2.8rem;
    border-radius: 4px;
    padding: 0 1rem;
    font-family: inherit;
    font-size: 1rem;
    border: none;
    box-shadow: 0 3px 6px hsla(0, 100%, 0%, 0.16);
    &:focus {
      outline-color: var(--v-primary-base);
    }
    &::placeholder {
      color: var(--v-body-base);
    }
  }
  &__error {
    color: var(--v-red-base);
  }
}
</style>
