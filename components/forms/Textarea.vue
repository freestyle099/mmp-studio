<template>
  <ValidationProvider
    v-slot="{ errors }"
    mode="eager"
    :rules="rules"
    :name="name"
    tag="div"
  >
    <div class="input">
      <label
        class="input__label text-body-1"
        :for="name"
        >{{ label }}
        <span
          class="primary--text"
          v-if="rules.includes('required')"
          >*</span
        >
      </label>
      <textarea
        :id="name"
        type="text"
        :name="name"
        class="input__field"
        :value="value"
        rows="8"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
      <span
        v-if="errors.length"
        class="input__error"
        >{{ errors[0] }}</span
      >
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'MmpTextarea',
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
    font-size: clamp(0.875rem, 3vw, 1rem);
    font-weight: 700;
  }
  &__field {
    resize: none;
    border: none;
    border-radius: 4px;
    padding: 0.8rem 1rem;
    font-family: inherit;
    font-size: clamp(0.875rem, 3vw, 1rem);
    box-shadow: 0 3px 6px hsla(0, 100%, 0%, 0.16);
    &:focus {
      outline-color: var(--v-primary-base);
    }
  }
  &__error {
    color: var(--v-red-base);
  }
}
</style>
