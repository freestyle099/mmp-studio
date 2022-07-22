import sanitizeHtml from 'sanitize-html';

export default {
  computed: {
    sanitizeText() {
      return (text) => sanitizeHtml(text);
    },
  },
};
