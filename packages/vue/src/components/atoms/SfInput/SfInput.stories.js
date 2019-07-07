/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SfInput from "./SfInput.vue";

storiesOf("Atoms|Input", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfInput },
      props: {
        label: {
          default: text("Label", "Name")
        },
        valid: {
          default: boolean("Valid", true)
        },
        required: {
          default: boolean("Required", true)
        },
        errorMessage: {
          default: text("Error message", "Field is required.")
        }
      },
      data() {
        return {
          value: ""
        };
      },
      template: `
      <div :style="{ width: '300px', margin: '50px' }">
        <SfInput v-model="value" :label="label" :valid="valid" :errorMessage="errorMessage" :required="required" />
      </div>`
    }),
    {
      info: {
        summary: `
        <p>Single form input component.</p>
        <h2> Usage </h2>
        <pre><code>import SfInput from "@storefrontui/vue/dist/SfInput.vue"</code></pre>
        `
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfInput },
      props: {
        valid: {
          default: boolean("Valid")
        },
        required: {
          default: boolean("Required", true)
        },
        errorMessage: {
          default: text("Error message", "Field is required.")
        }
      },
      data() {
        return {
          value: ""
        };
      },
      template: `
        <div :style="{ width: '300px', margin: '50px' }">
          <SfInput v-model="value" :valid="valid" :required="required">
            <span style="color: salmon;">Address</span>
          </SfInput>
        </div>
      `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] with error message",
    () => ({
      components: { SfInput },
      props: {
        label: {
          default: text("Label", "Name")
        },
        valid: {
          default: boolean("Valid", false)
        },
        required: {
          default: boolean("Required", true)
        }
      },
      data() {
        return {
          value: ""
        };
      },
      template: `
        <div :style="{ width: '300px', margin: '50px' }">
          <SfInput v-model="value" :label="label" :valid="valid" :required="required">
            <span slot="errorMessage" style="color: orange;">This field is not correct.</span>
          </SfInput>
        </div>
      `
    }),
    {
      info: true
    }
  );
