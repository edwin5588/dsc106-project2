let myConfig = {
      type: 'bar',
      title: {
        text: 'Base Stats Comparison of All Three Pokemons',
        fontSize: 24,
      },
      legend: {
        draggable: true,
      },
      scaleX: {
        // Set scale label
        label: { text: 'Type' },
        // Convert text on scale indices
        labels: [ 'Health', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed']
      },
      scaleY: {
        // Scale label with unicode character
        label: { text: 'Stat' }
      },
      plot: {
        // Animation docs here:
        // https://www.zingchart.com/docs/tutorials/styling/animation#effect
        animation: {
          effect: 'ANIMATION_EXPAND_BOTTOM',
          method: 'ANIMATION_STRONG_EASE_OUT',
          sequence: 'ANIMATION_BY_NODE',
          speed: 275,
        }
      },
      series: [
        {
          // Plot 1 values, linear data
          values: [44,48,65,50,64,43],
          text: 'Squirtle',
        },
        {
          // Plot 2 values, linear data
          values: [39,52,43,60,50,65],
          text: 'Charmander'
        },
        {
          // Plot 2 values, linear data
          values: [45,49,49,65,65,45],
          text: 'Bulbasaur'
        }
      ]
    };

var myshape = {
    "type": "null",
    "shapes": [{
        "type": "rect",
        "background-color": "#5297b6",
        "height": 40,
        "width": 40
    }]
};
// Render Method[3]
zingchart.render({
  id: 'myChart',
  data: myConfig
});

zingchart.render({
  id: 'test_shape',
  data: myshape,
  height : "100%",
  width: "100%"
})
