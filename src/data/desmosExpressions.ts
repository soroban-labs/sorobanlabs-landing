// Desmos expression configurations
export const defaultExpressions = [
  {
    "id": "time_slider",
    "latex": "t = 0.5",
    "sliderBounds": {
      "min": "0",
      "max": "\\frac{2 v_0 \\sin(a \\pi / 180)}{9.8}",
      "step": "0.00001"
    },
    "playing": false
  },
  {
    "id": "initial_speed",
    "latex": "v_0 = 20",
    "sliderBounds": {
      "min": "10",
      "max": "40",
      "step": "1"
    }
  },
  {
    "id": "launch_angle",
    "latex": "a = 45",
    "sliderBounds": {
      "min": "15",
      "max": "75",
      "step": "1"
    }
  },
  {
    "id": "velocity_x",
    "latex": "v_x = v_0 \\cos(a \\pi / 180)",
    "hidden": true
  },
  {
    "id": "velocity_y",
    "latex": "v_y = v_0 \\sin(a \\pi / 180) - 9.8 t",
    "hidden": true
  },
  {
    "id": "position_x",
    "latex": "x = v_0 \\cos(a \\pi / 180) t",
    "hidden": true
  },
  {
    "id": "position_y",
    "latex": "y = v_0 \\sin(a \\pi / 180) t - 4.9 t^2",
    "hidden": true
  },
  {
    "id": "speed",
    "latex": "s = \\sqrt{v_x^2 + v_y^2}",
    "hidden": true
  },
  {
    "id": "range_calculation",
    "latex": "R = \\frac{v_0^2 \\sin(2a \\pi / 180)}{9.8}",
    "hidden": true
  },
  {
    "id": "max_height_calculation",
    "latex": "H = \\frac{v_0^2 \\sin^2(a \\pi / 180)}{19.6}",
    "hidden": true
  },
  {
    "id": "projectile_ball",
    "latex": "(v_0 \\cos(a \\pi / 180) t, v_0 \\sin(a \\pi / 180) t - 4.9 t^2)",
    "color": "#fa7e19",
    "pointSize": 12
  },
  {
    "id": "trajectory_path",
    "latex": "y = \\tan(a \\pi / 180) x - \\frac{9.8 x^2}{2 v_0^2 \\cos^2(a \\pi / 180)} \\{0 \\leq x \\leq \\frac{v_0^2 \\sin(2a \\pi / 180)}{9.8}\\}",
    "color": "#6042a6",
    "lineWidth": 2,
    "lineOpacity": 0.4
  },
  {
    "id": "total_velocity_vector",
    "latex": "\\operatorname{polygon}((v_0 \\cos(a \\pi / 180) t, v_0 \\sin(a \\pi / 180) t - 4.9 t^2), (v_0 \\cos(a \\pi / 180) t + v_x/4, v_0 \\sin(a \\pi / 180) t - 4.9 t^2 + v_y/4))",
    "color": "#c74440",
    "lineWidth": 4
  },
  {
    "id": "horizontal_velocity_vector",
    "latex": "\\operatorname{polygon}((v_0 \\cos(a \\pi / 180) t, v_0 \\sin(a \\pi / 180) t - 4.9 t^2), (v_0 \\cos(a \\pi / 180) t + v_x/4, v_0 \\sin(a \\pi / 180) t - 4.9 t^2))",
    "color": "#2d70b3",
    "lineWidth": 3,
    "lineStyle": "DASHED"
  },
  {
    "id": "vertical_velocity_vector",
    "latex": "\\operatorname{polygon}((v_0 \\cos(a \\pi / 180) t, v_0 \\sin(a \\pi / 180) t - 4.9 t^2), (v_0 \\cos(a \\pi / 180) t, v_0 \\sin(a \\pi / 180) t - 4.9 t^2 + v_y/4))",
    "color": "#348543",
    "lineWidth": 3,
    "lineStyle": "DASHED"
  },
  {
    "id": "time_label",
    "latex": "(20, -3.0)",
    "hidden": true,
    "showLabel": true,
    "label": "`\\mathrm{Time:}\\ ${t}\\mathrm{s}`",
    "pointSize": 0
  },
  {
    "id": "height_label",
    "latex": "(20, -5)",
    "hidden": true,
    "showLabel": true,
    "label": "`\\mathrm{Height:}\\ ${h}\\mathrm{m}`",
    "pointSize": 0
  },
  {
    "id": "speed_label",
    "latex": "(20, -7)",
    "hidden": true,
    "showLabel": true,
    "label": "`\\mathrm{Speed:}\\ ${s}\\mathrm{m/s}`",
    "pointSize": 0
  },
  {
    "id": "velocity_x_label",
    "latex": "(v_0 \\cos(a \\pi / 180) t + v_x/8, v_0 \\sin(a \\pi / 180) t - 4.9 t^2 - 2)",
    "hidden": true,
    "showLabel": true,
    "label": "`v_x = ${v_x}\\mathrm{m/s}`",
    "pointSize": 0,
    "color": "#2d70b3"
  },
  {
    "id": "velocity_y_label",
    "latex": "(v_0 \\cos(a \\pi / 180) t - 3, v_0 \\sin(a \\pi / 180) t - 4.9 t^2 + v_y/8)",
    "hidden": true,
    "showLabel": true,
    "label": "`v_y = ${v_y}\\mathrm{m/s}`",
    "pointSize": 0,
    "color": "#348543"
  },
  {
    "id": "ground_line",
    "latex": "y = 0",
    "color": "#654321",
    "lineWidth": 2
  },
  {
    "id": "launch_point",
    "latex": "(0, 0)",
    "color": "#000000",
    "pointSize": 8,
    "showLabel": true,
    "label": "`\\mathrm{Launch}`"
  },
  {
    "id": "max_height_point",
    "latex": "(\\frac{v_0^2 \\sin(2a \\pi / 180)}{19.6}, \\frac{v_0^2 \\sin^2(a \\pi / 180)}{19.6})",
    "color": "#6042a6",
    "pointSize": 6,
    "showLabel": true,
    "label": "`\\mathrm{Max\\ Height}`"
  },
  {
    "id": "landing_point",
    "latex": "(\\frac{v_0^2 \\sin(2a \\pi / 180)}{9.8}, 0)",
    "color": "#c74440",
    "pointSize": 6,
    "showLabel": true,
    "label": "`\\mathrm{Landing}`"
  },
  {
    "id": "current_height",
    "latex": "h = v_0 \\sin(a \\pi / 180) t - 4.9 t^2",
    "hidden": true
  },
  {
    "id": "velocity_vector_test",
    "latex": "\\operatorname{V}(v_0 \\cos(a \\pi / 180) t, v_0 \\sin(a \\pi / 180) t - 4.9 t^2, v_0 \\cos(a \\pi / 180) t + v_x/4, v_0 \\sin(a \\pi / 180) t - 4.9 t^2 + v_y/4)",
    "color": "#ff6b35",
    "lineWidth": 3
  }
];

