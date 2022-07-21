import { extend, ValidationProvider } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

// Add a rule.
extend('required', {
  ...rules.required,
  message: 'To pole jest wymagane',
});
extend('numeric', {
  ...rules.numeric,
  message: 'To pole może zawierać tylko cyfry',
});
extend('alpha', {
  ...rules.alpha,
  message: 'To pole może zawierać tylko litery (bez spacji)',
});
extend('alpha_spaces', {
  ...rules.alpha_spaces,
  message: 'To pole może zawierać tylko litery',
});
extend('email', {
  ...rules.email,
  message: 'Wpisz poprawny adres email',
});
extend('max_value', {
  ...rules.max_value,
  message: 'Wiek nie może być wyższy niż 100 lat',
});
extend('min_value', {
  ...rules.min_value,
  message: 'Wiek nie może być niższy niż 1 rok',
});
extend('min', {
  ...rules.min,
  message: (value, args) => {
    return `To pole musi zawierać min. ${args.length} znaków`;
  },
});
extend('max', {
  ...rules.max,
  message: (value, args) =>
    `To pole nie może być dłuższe niż ${args.length} znaków`,
});

export default {
  components: {
    ValidationProvider,
  },
};
