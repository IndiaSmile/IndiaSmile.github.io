<template lang="pug">
  .article
    ArticleHero(:image="image")

    .content
      h2.content__title {{ title }}
      .content__section(v-for="(data, index) in article" :key="index")
        Sharer(v-if="data.custom === 'Sharer'" :title="title")
        h5.content__heading(v-if="!!data.heading") {{ data.heading }}
        YTEmbed(v-if="!!data.youtube" :src="data.youtube")
        p.content__text(v-if="!!data.text" v-html="data.text")
      Sharer(:title="title")
</template>

<script>
import YTEmbed from '~/components/YTEmbed'
import ArticleHero from '~/components/ArticleHero'

export default {
  name: 'HomePage',
  components: {
    YTEmbed,
    ArticleHero,
  },

  data() {
    return {
      title: 'Cardio',
      image: require('~/assets/images/girl-running.jpg?resize'),
      article: [
        {
          text: `Cardiovascular are exercises that raise your heart rate. Our bodies were made to move. And we all know that to keep our muscles in shape we need move them! The rhythmic and endurance based movements of body muscles comprise cardiovascular training. It is the training that will help you take deeper breaths, build a stronger heart, and make you feel like a powerhouse of energy! <span class="js--h">Cardio exercises are suggested for all those who want to see an improvement in blood pressure, cholesterol, stress, energy and overall health.</span>`,
        },
        {
          custom: 'Sharer',
        },
        {
          heading: 'General Fitness Exercises',
          text: `It is important to start small and increase the time you are active and the intensity of your cardio workout. It is all about movement! As your heart beats faster it increases the blood flow. The lungs deliver more oxygen to your muscles and make you feel stronger. These at-home cardio workout suggestions are an efficient way to burn off extra calories and keep your metabolism stoked through these times of home isolation.`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=YvrKIQ_Tbsk',
          text:
            'This is a quick video on the difference between cardio and strength exercises, so that you become aware of how much and what you should do, and achieve the perfect balance!',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=7o39NrSwfb8',
          text:
            'An intense overall look into the world of cardio exercises! This will give you a good idea of how to establish a good cardio routine for yourself.',
        },
        {
          heading: 'Short workout routines',
          text: `Quick cardio workouts and effective instructions on how to get the most out of your cardio goals! As you keep progressing, you will observe how more oxygen to your muscles improve your endurance to perform the same routine better and more easily! Keep raising the bar high and feel full of stamina both mentally and physically.`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=_knIf9vF4k4',
          text:
            'A comprehensive 10 min workout curated for maximum impact and effect. Mention thorough tips on how to maintain the right posture and feel motivated whilst doing it!',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=BR0jT6JxH-o',
          text:
            '5 mins of nonstop burst cardio exercises! A well perceived mix of jumping jacks and other aerobic exercises! Discover ways to recover quickly between sets as well.',
        },
        {
          heading: 'Quarantine Progression Workouts!',
          text: `20-30 days of regular cardio can transform your life. There are tons of transformational videos of people who have achieved their dream bodies! If you are into sports or any movement based activity, we would suggest you set realistic goals and work to them! The feeling of success when you take your first run or swim after these days of lockdown, will surely satisfy you! We wish to motivate you to build an edge, lose that fat and get ahead of your peers!`,
        },
        {
          youtube: 'https://www.youtube.com/watch?v=4WC-5ZBz2Q8',
          text:
            '30 days , burn all the belly fat and get toned! We would specially suggest this for all our female viewers who wish to achieve toned muscles, look fit and feel beautiful!',
        },
        {
          youtube: 'https://www.youtube.com/watch?v=3p8EBPVZ2Iw',
          text:
            'When your body loses fat, you will start developing abs! These are a mix of body sculpting and fat burning exercises specially for toned abs! Follow this for 21 days and see the difference!',
        },
      ],
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.image,
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus"></style>
