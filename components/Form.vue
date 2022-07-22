<template>
  <section
    class="py-10 py-md-16"
    id="kontakt"
  >
    <v-container>
      <h2 class="text-h2 text-center mb-10">{{ title }}</h2>
      <ValidationObserver
        ref="form"
        v-slot="{ handleSubmit, failed, invalid }"
      >
        <form
          class="form"
          @submit.prevent="handleSubmit(onSubmit)"
        >
          <mmp-input
            v-model="form.name"
            name="name"
            label="Imię"
            placeholder="Podaj swoje imię"
            rules="required|alpha|min:3|max:100"
            class="form__input"
          />
          <mmp-input
            v-model="form.surname"
            name="surname"
            label="Nazwisko"
            placeholder="Podaj swoje nazwisko"
            rules="required|alpha_spaces|min:3|max:100"
            class="form__input"
          />
          <mmp-input
            v-model="form.email"
            name="email"
            label="Adres Email"
            placeholder="Podaj swój adres email"
            rules="required|email"
            class="form__input"
            type="email"
          />
          <mmp-input
            v-model="form.phone"
            name="phone"
            label="Telefon kontaktowy"
            placeholder="Podaj swój telefon kontaktowy"
            rules="required|min:9|max:12|numeric"
            class="form__input"
          />
          <mmp-textarea
            v-model="form.message"
            label="Treść wiadomości"
            name="message"
            placeholder="Wpisz tutaj treść wiadomości"
            rules="required|min:10|max:1000"
            class="form__textarea"
          />
          <mmp-button
            class="form__submit"
            variant="primary"
            type="submit"
            :disabled="failed && invalid"
          >
            {{ isSubmitting ? 'Wysyłam...' : 'Wyślij swoje zgłoszenie' }}
          </mmp-button>
        </form>
      </ValidationObserver>
    </v-container>
    <v-snackbar
      :color="color"
      v-model="snackbar"
      top
      right
    >
      <span class="text-body-1 font-weight-black">{{ message }}</span>
    </v-snackbar>
  </section>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

import MmpTextarea from '@/components/forms/Textarea';

export default {
  name: 'MmpForm',
  components: {
    MmpTextarea,
    ValidationObserver,
    MmpButton: () => import('~/components/Button'),
    MmpInput: () => import('~/components/forms/Input'),
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isSubmitting: false,
      snackbar: false,
      message: '',
      color: '',
      form: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      this.isSubmitting = true;
      this.message = '';
      this.color = '';

      try {
        const resp = await this.$axios.post('/contact', this.form);
        if (resp.status === 200) {
          this.form = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
          };
          this.message = 'Wysłano pomyślnie';
          this.color = 'green';
          this.$refs.form.reset();
          this.isSubmitting = false;
          this.snackbar = true;
        }
      } catch (err) {
        this.isSubmitting = false;
        this.color = 'red';
        this.message = 'Nie udało się wysłać wiadomości';
        this.snackbar = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  display: grid;
  gap: 1.5rem;
  @media #{$sm-larger} {
    grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  }
  &__textarea {
    @media #{$sm-larger} {
      grid-column: 1/-1;
    }
  }
  &__submit {
    grid-column: 1/-1;
  }
}
</style>
