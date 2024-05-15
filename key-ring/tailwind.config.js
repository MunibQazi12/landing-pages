/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
		colors: {
			'white': '#ffffff',
			'black': '#000000',
		},
		
		fontFamily: {
			proximaNova: ['ProixmaNova', 'sans-serif'],
			proximaNovaMedium: ['ProixmaNovaMedium', 'sans-serif'],
			proximaNovaSemiBold: ['ProixmaNovaSemiBold', 'sans-serif'],
			proximaNovaBold: ['ProixmaNovaBold', 'sans-serif'],
			GilroyBold: ['GilroyBold', 'sans-serif'],
			GilroyMedium: ['GilroyMedium', 'sans-serif'],
			GilroySemiBold: ['GilroySemiBold', 'sans-serif'],
			HelveticaNeueMedium: ['HelveticaNeueMedium', 'sans-serif']
		},
		
		extend: {
			colors: {
				'yellow': '#FFDA00',
				'primary': '#3E63A8',
				'semiPrimary': '#3f63a6',
				'mehroon': '#602255',
			},
			backgroundColor: {
				'primary': '#3E63A8',
				'cardCommunityBg': '#E0E8F6',
				'startingCommunityBg': '#B7C9E9',
				'communityConversationBg': '#b7c9e973',
				'dieSectionBg': '#e1e8f6',
				'semiPrimary': '#3f63a6',
				'lightestBlueBg': '#EAF1FF',
			},
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
				roundedthemeTwentyEightSize : '2.5rem'
			},
			fontSize: {
				themeFiftySixSize: '3.51rem',
				themeFortyTwoSize: '2.63rem',
				themeThirtyTwoSize: '2.05rem',
				themeTwentySevenSize: '1.74rem',
				themeTwentyEightSize: '1.75rem',
				themeFortySize: '2.5rem',
				themeThirtyTwo: '2rem',
				themeSixtyFour: '4rem',
				themetwentyEight: '1.75rem',
			},
			maxWidth: {
        fourSeventyThree: '29.5rem',
        fourteenForty: '90rem',
        twoEighty: '17.5rem',
        fiveFourtyEight: '34.25rem',
        nineNintyEight: '62.375rem',
        threeSeventyNine: '23.688rem',
        fourFourtyEight: '28.688rem',
        fiveFiftySeven: '35.625rem',
        oneEightySix: '11.625rem',
        fiveTwenty: '32.5rem',
        nineEighty: '61.25rem',
        nineHundred: '56.25rem',
        nineSeventyThree: '60.813rem',
        fiveSixtyFour: '35.25rem',
        nineTwentyTwo: '57.625rem',
        eightFourtyTwo: '52.625rem',
    },
			borderRadius: {
        thirty: '1.875rem',
        twentyone: '1.313rem',
        fourtyTwo: '2.625rem',
        thirtyThree: '2.063rem',
        thirtySeven: '2.313rem',
        twenty:'1.25rem',
        twentyBottomLeftRight:'0 0 1.25rem 1.25rem',
        five: '0 0.313rem  0.313rem 0',
        '4xl': '2rem',
        twentyone: '1.3125rem'
    },
			lineHeight: {
				fiftyeight: '3.625rem',
				fourtyeight: '3rem',
				seventyEight: '4.875rem'
			},
			letterSpacing: {
				one: '0.087rem',
			},
			width: {
        fortyNinePercent: '49.19%',
            },
      padding: {
          '5.5' : '1.375rem',
          '4.5' : '1.125rem',
      },
      transitionProperty: {
        'height': 'height'
      }
		}
	},
}
