const ah = () => Promise.resolve().then(() => oh), Uo = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: lh, jsx: f, jsxs: S } = Uo;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
globalThis.__GLOBALS__.React.Children;
globalThis.__GLOBALS__.React.cloneElement;
({
  ...globalThis.__GLOBALS__.React
});
const { Component: zo, createContext: wt, createElement: $o, createFactory: ch, createRef: uh, forwardRef: Ko, Fragment: ns, isValidElement: hh, lazy: dh, memo: fh, Profiler: ph, PureComponent: mh, startTransition: gh, StrictMode: yh, Suspense: vh, use: bh, useCallback: is, useContext: _, useDebugValue: xh, useDeferredValue: Th, useEffect: dt, useId: Ho, useImperativeHandle: Ch, useInsertionEffect: Go, useLayoutEffect: Xo, useMemo: he, useReducer: Sh, useRef: ct, useState: Je, useSyncExternalStore: wh, useTransition: Ph, version: Ah, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Eh } = globalThis.__GLOBALS__.React, E = {
  p1225c600: "M881.165 254.345C885.871 254.656 890.771 254.499 895.504 254.433L895.581 305.059C895.588 314.067 896.105 325.832 894.728 334.618C894.14 338.36 889.937 340.789 886.834 342.565C865.475 343.577 836.228 342.656 814.247 342.651C810.4 342.734 804.362 343.067 800.748 342.42L800.419 341.555L801.537 339.565C803.205 338.205 823.343 338.811 826.892 338.812L881.184 338.81C880.538 311.792 880.945 281.477 881.165 254.345Z",
  p168cb80: "M987.731 62.9083L989.832 62.8623C1015.44 62.4337 1042.13 63.3761 1067.82 62.7681C1095.68 61.5069 1113.1 64.7583 1113.63 97.012C1114.32 139.82 1096.65 137.701 1062.11 137.82L1115.98 190.02L1078.45 190C1072.18 184.73 1062.56 174.869 1056.45 168.938L1017.37 131.084C1016.98 130.594 1016.84 130.084 1016.6 129.489C1018.59 128.286 1072.87 128.745 1080.44 128.727L1080.32 71.818L995.709 71.8594C996.265 82.9688 995.78 95.807 995.87 107.068C996.103 134.634 995.45 162.495 996.084 190.027L963.255 190.024C962.311 156.596 963.197 120.978 963.527 87.409C963.656 73.8506 974.957 65.4727 987.731 62.9083Z",
  p173f6380: "M156.789 8.99975C158.207 12.3984 157.494 34.5836 157.428 39.4689C153.191 42.2722 146.574 45.8345 142.027 48.469C142.554 74.1435 142.13 101.205 142.132 126.964L142.093 271.057C136.41 268.594 122.339 259.881 116.559 256.494C115.525 229.622 116.365 197.613 116.374 170.352L116.333 63.3933C109.76 66.7754 101.138 72.0941 94.5897 75.8625L51.4735 100.681C51.0468 91.1211 51.23 79.9878 51.1785 70.3052C60.1154 64.1065 77.5322 54.7397 87.3588 49.0672L156.789 8.99975Z",
  p1d62fd80: "M1127.29 273.31C1129.35 268.864 1135 255.539 1138.27 253.017L1140.69 253.416L1138.92 252.599L1140.86 253.826C1141.08 256.139 1140.43 256.91 1139.25 258.866C1137.48 262.701 1130.72 277.926 1128.21 279.916L1126.23 279.876C1125.56 277.885 1125.18 277.461 1126.23 275.328C1126.57 274.648 1126.93 273.976 1127.29 273.31Z",
  p1fb74e70: "M180.778 0H182.89C199.049 3.46246 228.127 22.5378 243.934 31.8286C244.741 88.0186 244.284 147.61 243.869 203.914C233.314 198.673 221.01 191.548 210.558 185.845C211.956 195.366 212.611 209.422 213.355 219.215L218.611 288.593C219.492 300.234 220.262 316.068 221.825 327.403C214.452 332.096 204.475 337.476 196.741 341.932L186.061 207.035C184.404 186.198 181.742 161.203 180.965 140.559C192.503 146.368 206.964 155.237 218.403 161.815L218.395 48.1881L180.924 26.5432C180.166 20.6142 180.303 5.89648 180.778 0Z",
  p21417700: "M853.237 257.661C858.299 257.957 862.559 257.835 867.621 257.699C867.795 278.444 867.356 299.225 867.808 319.982L853.359 319.976C852.538 300.933 853.153 277.017 853.237 257.661Z",
  p23b74c00: "M1115.13 314.119L1129.51 314.162L1129.48 338.674C1135.89 338.727 1186.6 338.239 1188.17 339.162L1187.94 341.681C1182.7 344.316 1139.35 341.666 1130.07 342.606C1112.15 344.423 1114.84 326.199 1115.13 314.119Z",
  p25df4c00: "M1139.25 258.866C1153.22 258.363 1167.31 259.063 1181.31 258.7L1181.93 260.263C1179.38 265.389 1162.24 260.278 1158.37 263.541C1159.06 264.578 1159.37 265.106 1160.31 265.969C1164.64 270.417 1168.92 274.895 1173.18 279.401C1168.71 279.419 1163.34 279.576 1158.93 279.417C1152.22 272.713 1145.65 265.861 1139.25 258.866Z",
  p26b83ff0: "M676.895 302.058C686.256 301.524 729.861 300.706 736.119 303.466C738.602 304.561 740.522 306.924 741.505 309.419C743.405 314.28 743.767 329.945 741.621 334.627C739.804 338.594 737.012 340.533 733.016 341.921C721.464 343.175 707.267 341.965 695.54 342.378C678.834 342.967 664.819 344.004 666.939 322.423C667.87 312.989 664.612 306.096 676.895 302.058ZM681.504 338.124L728.045 338.153C727.967 327.394 727.961 316.635 728.025 305.876L681.498 305.892L681.504 338.124Z",
  p2a4cab00: "M1078.57 286.499L1155.05 286.417C1170.16 286.478 1173.87 290.179 1173.58 305.825C1173.47 312.298 1173.52 319.35 1173.48 325.874L1159.05 325.877C1158.55 316.72 1158.73 305.565 1158.68 296.257C1158.65 294.498 1158.53 292.695 1158.42 290.935C1157.16 289.962 1090.22 290.423 1082.67 290.432C1083.13 301.437 1082.83 314.73 1082.87 325.866L1068.28 325.856C1067.88 319.476 1067.93 312.849 1067.81 306.448C1067.64 296.92 1068.34 289.387 1078.57 286.499Z",
  p2aca2d00: "M678.194 62.6551C688.926 63.0331 700.24 62.8213 710.978 62.7021C711.572 101.625 711.042 141.951 711.081 181.004L801.86 181.004L797.458 187.163L795.725 189.188C789.61 191.922 733.967 188.985 723.216 190.093C672.467 195.329 678.072 164.576 678.117 131.04L678.194 62.6551Z",
  p2e39ba00: "M698.468 253.714C703.634 253.928 706.679 253.905 711.831 253.525L711.889 266.401C720.908 266.491 729.797 266.496 738.809 266.275C740.509 266.233 741.77 266.575 742.972 267.78L742.63 269.197C738.718 271.203 717.236 270.434 711.779 270.399L711.889 285.482C721.586 285.127 732.687 285.834 742.539 285.413C744.058 285.348 743.826 285.406 744.672 286.304L743.91 287.803C741.013 290.579 708.094 289.507 701.429 289.498C694.479 289.371 671.523 290.2 666.364 288.943L666.338 287.705C666.648 287.295 666.959 286.904 667.334 286.545C669.583 284.371 693.064 285.538 697.518 285.548C697.363 280.629 697.434 275.285 697.401 270.329C691.913 270.394 671.135 271.414 668.077 269.205C665.607 265.54 666.758 257.197 669.441 253.887L670.482 254.331C671.342 258.633 671.465 262.043 671.109 266.383L697.505 266.476C697.343 262.908 696.658 256.399 698.468 253.714Z",
  p318c4880: "M1082.51 253.801L1083.14 253.753C1084.77 255.976 1084.1 275.393 1084.08 279.499L1071.07 279.517L1070 279.11C1068.74 276.29 1069.43 257.998 1069.51 253.742C1073.72 253.991 1078.27 253.848 1082.51 253.801Z",
  p31a91200: "M1115.6 296.099C1117.42 296.096 1118.42 295.946 1119.97 296.868C1119.06 301.186 1100.08 336.549 1096.9 342.782C1095.33 342.844 1093.79 343.101 1092.57 342.167C1094.06 338.001 1098.38 330.031 1100.5 325.854L1115.6 296.099Z",
  p31aac480: "M1112.61 253.769C1114.05 255.739 1113.49 275.75 1113.47 279.548L1099.7 279.546C1098.01 277.181 1098.91 258.131 1099 253.952L1112.61 253.769Z",
  p342b8700: "M928.908 254.232C962.273 252.295 998.553 255.17 1032.2 254.139C1044.56 253.76 1046.99 275.355 1031.14 275.792C1024.33 275.981 1016.9 275.932 1010.02 275.919L970.244 275.847C961.238 275.836 951.017 276.116 941.979 275.786C941.495 275.768 941.288 275.214 940.906 274.678L941.391 273.173C944.468 270.823 958.782 272.03 963.52 272.016C980.135 271.913 996.756 271.895 1013.38 271.961L1028.06 271.908C1027.93 267.416 1028.01 262.494 1028 257.965H935.482L935.463 342.75L920.962 342.738C920.471 331.46 919.327 267.844 921.57 261.234C922.85 257.476 925.559 255.848 928.908 254.232Z",
  p34abf300: "M952.375 280.516C957.165 280.589 962.163 280.49 966.979 280.456L966.998 289.592L1010.45 289.671L1010.47 280.569C1015.14 280.688 1020.15 280.601 1024.84 280.596L1024.86 289.589C1028.4 289.574 1038.51 288.857 1040.6 291.561C1037.3 294.119 1028.96 293.608 1024.78 293.541C1024.97 297.706 1024.84 302.531 1024.83 306.747C1027.26 306.704 1043.17 306.695 1044.36 307.7C1040.04 311.975 1031.41 311.048 1025.78 310.772C1016.09 310.298 1004.29 311.696 994.862 310.396L1019.19 326.558C1021.32 322.836 1024.82 315.501 1028.6 313.841C1030.34 314.069 1029.75 313.749 1030.86 315.183C1030.17 317.773 1024.79 325.845 1022.95 328.98L1043.17 342.535C1035.64 342.595 1028.11 342.61 1020.59 342.582C1016.79 340.268 1012.44 337.229 1008.68 334.739C997.234 328.162 978.221 314.479 966.358 306.671C979.935 307.19 996.601 306.794 1010.47 306.854L1010.4 293.495L966.914 293.539C967.018 308.618 967.037 323.696 966.979 338.775C972.073 338.811 981.04 338.266 986.037 339.142C986.458 339.215 986.626 339.936 986.858 340.473L986.147 341.593C984.02 342.751 981.001 342.604 978.629 342.779C949.259 344.952 951.955 335.551 952.304 310.659C949.188 310.727 943.777 311.539 942.012 308.792C944.649 306.004 948.845 306.547 952.362 306.698L952.304 293.519C949.317 293.539 943.518 294.495 942.005 291.681C944.578 288.959 948.923 289.513 952.375 289.656V280.516Z",
  p37132aa0: "M76.7674 114.358C76.8043 114.392 76.8444 114.424 76.878 114.461C78.2996 116.016 77.5801 248.05 77.5736 262.232L180.943 322.07L180.996 351.669L165.889 342.998L51.8786 277.347C50.998 262.897 51.6486 241.288 51.6501 226.297L51.6746 128.994C56.733 125.389 70.8191 117.802 76.7674 114.358Z",
  p381e2a00: "M180.437 406C165.073 402.864 156.849 396.453 143.521 388.766L98.7692 362.943L45.5466 332.205C35.917 326.641 26.3438 321.151 16.7641 315.395C8.54394 310.457 1.65272 302.244 1.05419 292.246C0.455201 282.24 0.790825 271.639 0.789538 261.549L0.791019 202.14L0.806832 144.441C0.809457 133.294 0.118283 119.987 1.91693 109.07C4.05747 96.0772 17.2672 89.532 27.7653 83.7375L27.789 290.986C78.4942 319.879 130.649 349.655 180.837 379.344C200.58 367.113 222.889 354.803 243.11 343.127L334.011 290.773C333.197 278.065 333.679 261.295 333.685 248.326L333.689 174.586L333.674 117.44C333.667 108.092 333.241 93.0063 334.122 84.0006C347.603 91.4502 359.706 97.515 360.496 115.126C361.021 126.83 360.812 138.44 360.816 150.155L360.822 213.939L360.796 264.382C360.788 275.756 362.359 293.623 356.932 303.34C354.592 307.454 351.36 310.992 347.475 313.695C339.999 318.835 326.424 326.134 318.104 330.934L262.833 362.805L220.037 387.571C206.744 395.3 196.46 402.903 181.151 406H180.437Z",
  p38250b00: "M788.297 284.569C798.563 284.597 825.793 281.431 832.362 289.614C837.559 296.086 835.678 314.174 825.567 315.859C820.718 316.666 804.498 317.047 800.367 314.766L800.464 313.872C805.002 311.56 814.984 312.154 820.402 312.226C820.369 309.066 820.693 290.262 819.574 288.419L791.976 288.473C792.325 306.138 792.034 324.889 792.04 342.636L777.76 342.745C777.417 333.409 775.82 296.564 779.518 290.035C781.354 286.792 784.929 285.523 788.297 284.569Z",
  p39585100: "M797.684 253.3C819.684 252.946 820.647 255.622 833.848 272.988C837.495 277.789 842.007 283.282 845.841 288.062C845.233 288.449 844.334 288.614 843.597 288.811C832.465 287.383 822.638 258.431 809.56 257.25L795.312 257.228C789.9 267.816 782.259 280.406 776.26 290.902L761.979 290.874C766.388 281.622 775.755 266.346 781.186 257.072C785.297 256.999 789.538 257.801 793.54 257.078C796.036 256.625 796.411 255.285 797.684 253.3Z",
  p3a8ec500: "M612.945 253.469L627.243 253.478L621.031 266.498C633.299 266.625 645.569 266.583 657.837 266.372C657.772 268.051 657.804 269.622 657.772 271.348C657.41 291.028 658.677 311.017 657.132 330.608C657.009 332.138 655.354 334.625 654.468 335.924C653.027 337.017 651.533 338.159 649.801 338.747C645.182 340.317 616.958 340.167 612.554 337.911C609.846 336.524 608.498 334.72 607.616 331.872C605.39 324.691 605.448 273.225 606.933 265.995C607.779 261.878 610.975 257.202 612.945 253.469ZM620.799 335.577L643.299 335.644L643.214 315.814L643.246 303.029C638.816 303.11 627.74 303.781 624.437 301.637C625.797 298.438 640.027 299.075 643.261 299.128C643.251 289.591 643.156 279.912 643.254 270.388C635.99 270.463 628.117 270.695 620.902 270.535C620.38 291.683 620.888 314.249 620.799 335.577Z",
  p3e9a9d00: "M607.044 62.661C617.779 63.0138 629.179 62.8408 639.915 62.6691L639.966 71.2802L639.975 133.638C639.979 160.501 644.959 189.728 608.088 190.039L542.387 190.083C529.906 190.075 516.606 190.692 504.296 188.971C497.181 187.977 486.921 178.407 485.66 171.475C483.115 157.472 484.104 141.505 484.109 127.185L484.172 62.6333C494.319 63.1677 506.704 62.8034 516.903 62.6891C517.678 101.419 516.922 142.039 517.047 181.004L607.064 180.985L607.044 62.661Z",
  p8db6780: "M790.676 62.7873L937.706 62.8925C935.728 65.7494 933.362 69.4441 930.931 71.8174L877.777 71.8355C878.307 92.7199 877.829 115.684 877.829 136.734C877.764 154.499 877.809 172.264 877.958 190.029L845.039 190.014C844.186 151.716 844.962 110.321 845 71.778L783.817 71.8213C786.035 68.6276 788.265 65.8211 790.676 62.7873Z",
  p9fd6880: "M1198.12 62.7565C1209.79 62.7369 1224.1 62.355 1235.55 63.0056C1237.88 65.4041 1243.84 74.4027 1245.96 77.4949L1265.76 106.372L1302.05 158.998C1308.85 168.868 1316.86 179.949 1323.08 190.078C1315.34 190.684 1293.38 190.375 1285.47 190.046C1279.07 181.724 1271.76 170.442 1265.72 161.668L1229.87 109.561L1214.46 87.0398C1211.83 91.7114 1208.69 96.6138 1205.82 101.164C1187.33 130.532 1169.78 160.731 1151.04 189.918L1136.1 189.91C1144.63 174.813 1155.25 158.313 1164.45 143.373L1206.38 75.5018C1203.29 71.0668 1200.78 67.4561 1198.12 62.7565Z",
  pdee2b20: "M283.322 54.683C291.943 59.5418 300.591 64.6494 309.162 69.6199C310.255 90.8561 309.466 119.551 309.483 141.265L309.614 276.847L283.728 291.713L284.911 214.171C285.131 201.717 284.997 189.059 285.74 176.659C283.571 183.296 279.226 211.929 277.803 220.35L263.437 303.336C254.745 308.877 243.285 315.081 234.19 320.342C246.384 250.04 260.689 179.88 273.069 109.592C276.271 91.4049 279.615 72.7587 283.322 54.683Z"
};
function Zo() {
  return /* @__PURE__ */ f("div", { className: "relative size-full", "data-name": "Ultra Expo_logo", children: /* @__PURE__ */ S("svg", { className: "absolute block inset-0 size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 1324 406", children: [
    /* @__PURE__ */ S("g", { clipPath: "url(#clip0_1_33)", id: "Ultra Expo_logo", children: [
      /* @__PURE__ */ f("path", { d: E.pdee2b20, fill: "var(--fill-0, #FEFEFE)", id: "Vector" }),
      /* @__PURE__ */ f("path", { d: E.p168cb80, fill: "var(--fill-0, #FEFEFE)", id: "Vector_2" }),
      /* @__PURE__ */ f("path", { d: E.p3e9a9d00, fill: "var(--fill-0, #FEFEFE)", id: "Vector_3" }),
      /* @__PURE__ */ f("path", { d: E.p173f6380, fill: "var(--fill-0, #FEFEFE)", id: "Vector_4" }),
      /* @__PURE__ */ f("path", { d: E.p37132aa0, fill: "var(--fill-0, #FEFEFE)", id: "Vector_5" }),
      /* @__PURE__ */ f("path", { d: E.p9fd6880, fill: "var(--fill-0, #FEFEFE)", id: "Vector_6" }),
      /* @__PURE__ */ f("path", { d: E.p8db6780, fill: "var(--fill-0, #FEFEFE)", id: "Vector_7" }),
      /* @__PURE__ */ f("path", { d: E.p2aca2d00, fill: "var(--fill-0, #FEFEFE)", id: "Vector_8" }),
      /* @__PURE__ */ f("path", { d: E.p3a8ec500, fill: "var(--fill-0, #FEFEFE)", id: "Vector_9" }),
      /* @__PURE__ */ f("path", { d: E.p26b83ff0, fill: "var(--fill-0, #FEFEFE)", id: "Vector_10" }),
      /* @__PURE__ */ f("path", { d: E.p34abf300, fill: "var(--fill-0, #FEFEFE)", id: "Vector_11" }),
      /* @__PURE__ */ f("path", { d: E.p342b8700, fill: "var(--fill-0, #FEFEFE)", id: "Vector_12" }),
      /* @__PURE__ */ f("path", { d: E.p1225c600, fill: "var(--fill-0, #FEFEFE)", id: "Vector_13" }),
      /* @__PURE__ */ f("path", { d: E.p38250b00, fill: "var(--fill-0, #FEFEFE)", id: "Vector_14" }),
      /* @__PURE__ */ f("path", { d: E.p2a4cab00, fill: "var(--fill-0, #FEFEFE)", id: "Vector_15" }),
      /* @__PURE__ */ f("path", { d: E.p2e39ba00, fill: "var(--fill-0, #FEFEFE)", id: "Vector_16" }),
      /* @__PURE__ */ f("path", { d: E.p21417700, fill: "var(--fill-0, #FEFEFE)", id: "Vector_17" }),
      /* @__PURE__ */ f("path", { d: E.p39585100, fill: "var(--fill-0, #FEFEFE)", id: "Vector_18" }),
      /* @__PURE__ */ f("path", { d: E.p23b74c00, fill: "var(--fill-0, #FEFEFE)", id: "Vector_19" }),
      /* @__PURE__ */ f("path", { d: E.p25df4c00, fill: "var(--fill-0, #FEFEFE)", id: "Vector_20" }),
      /* @__PURE__ */ f("path", { d: E.p318c4880, fill: "var(--fill-0, #FEFEFE)", id: "Vector_21" }),
      /* @__PURE__ */ f("path", { d: E.p31aac480, fill: "var(--fill-0, #FEFEFE)", id: "Vector_22" }),
      /* @__PURE__ */ f("path", { d: E.p31a91200, fill: "var(--fill-0, #FEFEFE)", id: "Vector_23" }),
      /* @__PURE__ */ f("path", { d: E.p1d62fd80, fill: "var(--fill-0, #FEFEFE)", id: "Vector_24" }),
      /* @__PURE__ */ f("path", { d: E.p381e2a00, fill: "var(--fill-0, #FEFEFE)", id: "Vector_25" }),
      /* @__PURE__ */ f("path", { d: E.p1fb74e70, fill: "var(--fill-0, #FEFEFE)", id: "Vector_26" })
    ] }),
    /* @__PURE__ */ f("defs", { children: /* @__PURE__ */ f("clipPath", { id: "clip0_1_33", children: /* @__PURE__ */ f("rect", { fill: "white", height: "406", width: "1324" }) }) })
  ] }) });
}
const In = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif", Yo = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Cases", href: "#cases" },
  { label: "Contact", href: "#contact" }
], ss = 44, qo = Math.round(ss * (1324 / 406));
function Jo() {
  const [t, e] = Je(!1);
  return dt(() => {
    const n = () => e(window.scrollY > 8);
    return window.addEventListener("scroll", n, { passive: !0 }), () => window.removeEventListener("scroll", n);
  }, []), /* Transparent header wrapper — page content visible on left + right sides */
  /* @__PURE__ */ f(
    "header",
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "14px 24px",
        /* space on all sides → floating appearance */
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ S(
        "div",
        {
          style: {
            maxWidth: 1760,
            margin: "0 auto",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            background: t ? "rgba(19,21,24,0.97)" : "rgba(19,21,24,0.88)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${t ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"}`,
            transition: "background 0.3s, border-color 0.3s",
            pointerEvents: "auto"
          },
          children: [
            /* @__PURE__ */ f("a", { href: "#hero", style: { display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }, children: /* @__PURE__ */ f("div", { style: { width: qo, height: ss, position: "relative", overflow: "hidden", flexShrink: 0 }, children: /* @__PURE__ */ f(Zo, {}) }) }),
            /* @__PURE__ */ f("nav", { style: { display: "flex", alignItems: "center" }, children: Yo.map((n) => /* @__PURE__ */ f(
              "a",
              {
                href: n.href,
                style: { fontFamily: In, fontSize: 19, fontWeight: 300, color: "#ffffff", padding: "8px 22px", textDecoration: "none", letterSpacing: "-0.01em", opacity: 0.75, transition: "opacity 0.15s" },
                onMouseEnter: (i) => i.currentTarget.style.opacity = "1",
                onMouseLeave: (i) => i.currentTarget.style.opacity = "0.75",
                children: n.label
              },
              n.href
            )) }),
            /* @__PURE__ */ f(
              "a",
              {
                href: "#contact",
                style: { fontFamily: In, fontSize: 17, fontWeight: 400, color: "var(--theme-white)", background: "var(--theme-blue)", padding: "11px 26px", textDecoration: "none", flexShrink: 0, letterSpacing: "-0.01em", transition: "opacity 0.15s" },
                onMouseEnter: (n) => n.currentTarget.style.opacity = "0.85",
                onMouseLeave: (n) => n.currentTarget.style.opacity = "1",
                children: "Start a Project"
              }
            )
          ]
        }
      )
    }
  );
}
const os = wt({});
function Qo(t) {
  const e = ct(null);
  return e.current === null && (e.current = t()), e.current;
}
const Qe = typeof window < "u", tr = Qe ? Xo : dt, tn = /* @__PURE__ */ wt(null);
function en(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function nn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const J = (t, e, n) => n > e ? e : n < t ? t : n;
let sn = () => {
};
const Q = {}, rs = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function as(t) {
  return typeof t == "object" && t !== null;
}
const ls = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function on(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const G = /* @__NO_SIDE_EFFECTS__ */ (t) => t, er = (t, e) => (n) => e(t(n)), $t = (...t) => t.reduce(er), jt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
class rn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return en(this.subscriptions, e), () => nn(this.subscriptions, e);
  }
  notify(e, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let r = 0; r < s; r++) {
          const o = this.subscriptions[r];
          o && o(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Y = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, H = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function cs(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const us = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, nr = 1e-7, ir = 12;
function sr(t, e, n, i, s) {
  let r, o, a = 0;
  do
    o = e + (n - e) / 2, r = us(o, i, s) - t, r > 0 ? n = o : e = o;
  while (Math.abs(r) > nr && ++a < ir);
  return o;
}
function Kt(t, e, n, i) {
  if (t === e && n === i)
    return G;
  const s = (r) => sr(r, 0, 1, t, n);
  return (r) => r === 0 || r === 1 ? r : us(s(r), e, i);
}
const hs = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, ds = (t) => (e) => 1 - t(1 - e), fs = /* @__PURE__ */ Kt(0.33, 1.53, 0.69, 0.99), an = /* @__PURE__ */ ds(fs), ps = /* @__PURE__ */ hs(an), ms = (t) => (t *= 2) < 1 ? 0.5 * an(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), ln = (t) => 1 - Math.sin(Math.acos(t)), gs = ds(ln), ys = hs(ln), or = /* @__PURE__ */ Kt(0.42, 0, 1, 1), rr = /* @__PURE__ */ Kt(0, 0, 0.58, 1), vs = /* @__PURE__ */ Kt(0.42, 0, 0.58, 1), ar = (t) => Array.isArray(t) && typeof t[0] != "number", bs = (t) => Array.isArray(t) && typeof t[0] == "number", lr = {
  linear: G,
  easeIn: or,
  easeInOut: vs,
  easeOut: rr,
  circIn: ln,
  circInOut: ys,
  circOut: gs,
  backIn: an,
  backInOut: ps,
  backOut: fs,
  anticipate: ms
}, cr = (t) => typeof t == "string", Bn = (t) => {
  if (bs(t)) {
    sn(t.length === 4);
    const [e, n, i, s] = t;
    return Kt(e, n, i, s);
  } else if (cr(t))
    return lr[t];
  return t;
}, Xt = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function ur(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, r = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    o.has(c) && (u.schedule(c), t()), c(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, h = !1, d = !1) => {
      const m = d && s ? n : i;
      return h && o.add(c), m.has(c) || m.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      i.delete(c), o.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (a = c, s) {
        r = !0;
        return;
      }
      s = !0, [n, i] = [i, n], n.forEach(l), n.clear(), s = !1, r && (r = !1, u.process(c));
    }
  };
  return u;
}
const hr = 40;
function xs(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, r = () => n = !0, o = Xt.reduce((y, P) => (y[P] = ur(r), y), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: h, preRender: d, render: p, postRender: m } = o, b = () => {
    const y = Q.useManualTiming ? s.timestamp : performance.now();
    n = !1, Q.useManualTiming || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(y - s.timestamp, hr), 1)), s.timestamp = y, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), d.process(s), p.process(s), m.process(s), s.isProcessing = !1, n && e && (i = !1, t(b));
  }, v = () => {
    n = !0, i = !0, s.isProcessing || t(b);
  };
  return { schedule: Xt.reduce((y, P) => {
    const T = o[P];
    return y[P] = (A, k = !1, w = !1) => (n || v(), T.schedule(A, k, w)), y;
  }, {}), cancel: (y) => {
    for (let P = 0; P < Xt.length; P++)
      o[Xt[P]].cancel(y);
  }, state: s, steps: o };
}
const { schedule: V, cancel: et, state: I, steps: me } = /* @__PURE__ */ xs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : G, !0);
let te;
function dr() {
  te = void 0;
}
const N = {
  now: () => (te === void 0 && N.set(I.isProcessing || Q.useManualTiming ? I.timestamp : performance.now()), te),
  set: (t) => {
    te = t, queueMicrotask(dr);
  }
}, Ts = (t) => (e) => typeof e == "string" && e.startsWith(t), cn = /* @__PURE__ */ Ts("--"), fr = /* @__PURE__ */ Ts("var(--"), un = (t) => fr(t) ? pr.test(t.split("/*")[0].trim()) : !1, pr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Pt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Wt = {
  ...Pt,
  transform: (t) => J(0, 1, t)
}, Zt = {
  ...Pt,
  default: 1
}, kt = (t) => Math.round(t * 1e5) / 1e5, hn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function mr(t) {
  return t == null;
}
const gr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, dn = (t, e) => (n) => !!(typeof n == "string" && gr.test(n) && n.startsWith(t) || e && !mr(n) && Object.prototype.hasOwnProperty.call(n, e)), Cs = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, r, o, a] = i.match(hn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(r),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, yr = (t) => J(0, 255, t), ge = {
  ...Pt,
  transform: (t) => Math.round(yr(t))
}, at = {
  test: /* @__PURE__ */ dn("rgb", "red"),
  parse: /* @__PURE__ */ Cs("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + ge.transform(t) + ", " + ge.transform(e) + ", " + ge.transform(n) + ", " + kt(Wt.transform(i)) + ")"
};
function vr(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Le = {
  test: /* @__PURE__ */ dn("#"),
  parse: vr,
  transform: at.transform
}, Ht = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), tt = /* @__PURE__ */ Ht("deg"), q = /* @__PURE__ */ Ht("%"), C = /* @__PURE__ */ Ht("px"), br = /* @__PURE__ */ Ht("vh"), xr = /* @__PURE__ */ Ht("vw"), On = {
  ...q,
  parse: (t) => q.parse(t) / 100,
  transform: (t) => q.transform(t * 100)
}, mt = {
  test: /* @__PURE__ */ dn("hsl", "hue"),
  parse: /* @__PURE__ */ Cs("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + q.transform(kt(e)) + ", " + q.transform(kt(n)) + ", " + kt(Wt.transform(i)) + ")"
}, D = {
  test: (t) => at.test(t) || Le.test(t) || mt.test(t),
  parse: (t) => at.test(t) ? at.parse(t) : mt.test(t) ? mt.parse(t) : Le.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? at.transform(t) : mt.transform(t),
  getAnimatableNone: (t) => {
    const e = D.parse(t);
    return e.alpha = 0, D.transform(e);
  }
}, Tr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Cr(t) {
  return isNaN(t) && typeof t == "string" && (t.match(hn)?.length || 0) + (t.match(Tr)?.length || 0) > 0;
}
const Ss = "number", ws = "color", Sr = "var", wr = "var(", jn = "${}", Pr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function _t(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let r = 0;
  const a = e.replace(Pr, (l) => (D.test(l) ? (i.color.push(r), s.push(ws), n.push(D.parse(l))) : l.startsWith(wr) ? (i.var.push(r), s.push(Sr), n.push(l)) : (i.number.push(r), s.push(Ss), n.push(parseFloat(l))), ++r, jn)).split(jn);
  return { values: n, split: a, indexes: i, types: s };
}
function Ps(t) {
  return _t(t).values;
}
function As(t) {
  const { split: e, types: n } = _t(t), i = e.length;
  return (s) => {
    let r = "";
    for (let o = 0; o < i; o++)
      if (r += e[o], s[o] !== void 0) {
        const a = n[o];
        a === Ss ? r += kt(s[o]) : a === ws ? r += D.transform(s[o]) : r += s[o];
      }
    return r;
  };
}
const Ar = (t) => typeof t == "number" ? 0 : D.test(t) ? D.getAnimatableNone(t) : t;
function Er(t) {
  const e = Ps(t);
  return As(t)(e.map(Ar));
}
const nt = {
  test: Cr,
  parse: Ps,
  createTransformer: As,
  getAnimatableNone: Er
};
function ye(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Vr({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, r = 0, o = 0;
  if (!e)
    s = r = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = ye(l, a, t + 1 / 3), r = ye(l, a, t), o = ye(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(r * 255),
    blue: Math.round(o * 255),
    alpha: i
  };
}
function re(t, e) {
  return (n) => n > 0 ? e : t;
}
const M = (t, e, n) => t + (e - t) * n, ve = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, Mr = [Le, at, mt], Lr = (t) => Mr.find((e) => e.test(t));
function Wn(t) {
  const e = Lr(t);
  if (!e)
    return !1;
  let n = e.parse(t);
  return e === mt && (n = Vr(n)), n;
}
const _n = (t, e) => {
  const n = Wn(t), i = Wn(e);
  if (!n || !i)
    return re(t, e);
  const s = { ...n };
  return (r) => (s.red = ve(n.red, i.red, r), s.green = ve(n.green, i.green, r), s.blue = ve(n.blue, i.blue, r), s.alpha = M(n.alpha, i.alpha, r), at.transform(s));
}, Fe = /* @__PURE__ */ new Set(["none", "hidden"]);
function Fr(t, e) {
  return Fe.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function Dr(t, e) {
  return (n) => M(t, e, n);
}
function fn(t) {
  return typeof t == "number" ? Dr : typeof t == "string" ? un(t) ? re : D.test(t) ? _n : Ir : Array.isArray(t) ? Es : typeof t == "object" ? D.test(t) ? _n : kr : re;
}
function Es(t, e) {
  const n = [...t], i = n.length, s = t.map((r, o) => fn(r)(r, e[o]));
  return (r) => {
    for (let o = 0; o < i; o++)
      n[o] = s[o](r);
    return n;
  };
}
function kr(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = fn(t[s])(t[s], e[s]));
  return (s) => {
    for (const r in i)
      n[r] = i[r](s);
    return n;
  };
}
function Rr(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const r = e.types[s], o = t.indexes[r][i[r]], a = t.values[o] ?? 0;
    n[s] = a, i[r]++;
  }
  return n;
}
const Ir = (t, e) => {
  const n = nt.createTransformer(e), i = _t(t), s = _t(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Fe.has(t) && !s.values.length || Fe.has(e) && !i.values.length ? Fr(t, e) : $t(Es(Rr(i, s), s.values), n) : re(t, e);
};
function Vs(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? M(t, e, n) : fn(t)(t, e);
}
const Br = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => V.update(e, n),
    stop: () => et(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => I.isProcessing ? I.timestamp : N.now()
  };
}, Ms = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let r = 0; r < s; r++)
    i += Math.round(t(r / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, ae = 2e4;
function pn(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < ae; )
    e += n, i = t.next(e);
  return e >= ae ? 1 / 0 : e;
}
function Or(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), s = Math.min(pn(i), ae);
  return {
    type: "keyframes",
    ease: (r) => i.next(s * r).value / e,
    duration: /* @__PURE__ */ H(s)
  };
}
const jr = 5;
function Ls(t, e, n) {
  const i = Math.max(e - jr, 0);
  return cs(n - t(i), e - i);
}
const L = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, be = 1e-3;
function Wr({ duration: t = L.duration, bounce: e = L.bounce, velocity: n = L.velocity, mass: i = L.mass }) {
  let s, r, o = 1 - e;
  o = J(L.minDamping, L.maxDamping, o), t = J(L.minDuration, L.maxDuration, /* @__PURE__ */ H(t)), o < 1 ? (s = (u) => {
    const c = u * o, h = c * t, d = c - n, p = De(u, o), m = Math.exp(-h);
    return be - d / p * m;
  }, r = (u) => {
    const h = u * o * t, d = h * n + n, p = Math.pow(o, 2) * Math.pow(u, 2) * t, m = Math.exp(-h), b = De(Math.pow(u, 2), o);
    return (-s(u) + be > 0 ? -1 : 1) * ((d - p) * m) / b;
  }) : (s = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -be + c * h;
  }, r = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = Nr(s, r, a);
  if (t = /* @__PURE__ */ Y(t), isNaN(l))
    return {
      stiffness: L.stiffness,
      damping: L.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * i;
    return {
      stiffness: u,
      damping: o * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const _r = 12;
function Nr(t, e, n) {
  let i = n;
  for (let s = 1; s < _r; s++)
    i = i - t(i) / e(i);
  return i;
}
function De(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Ur = ["duration", "bounce"], zr = ["stiffness", "damping", "mass"];
function Nn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function $r(t) {
  let e = {
    velocity: L.velocity,
    stiffness: L.stiffness,
    damping: L.damping,
    mass: L.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Nn(t, zr) && Nn(t, Ur))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, r = 2 * J(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: L.mass,
        stiffness: s,
        damping: r
      };
    } else {
      const n = Wr(t);
      e = {
        ...e,
        ...n,
        mass: L.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function le(t = L.visualDuration, e = L.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const r = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: r }, { stiffness: l, damping: u, mass: c, duration: h, velocity: d, isResolvedFromDuration: p } = $r({
    ...n,
    velocity: -/* @__PURE__ */ H(n.velocity || 0)
  }), m = d || 0, b = u / (2 * Math.sqrt(l * c)), v = o - r, g = /* @__PURE__ */ H(Math.sqrt(l / c)), x = Math.abs(v) < 5;
  i || (i = x ? L.restSpeed.granular : L.restSpeed.default), s || (s = x ? L.restDelta.granular : L.restDelta.default);
  let y;
  if (b < 1) {
    const T = De(g, b);
    y = (A) => {
      const k = Math.exp(-b * g * A);
      return o - k * ((m + b * g * v) / T * Math.sin(T * A) + v * Math.cos(T * A));
    };
  } else if (b === 1)
    y = (T) => o - Math.exp(-g * T) * (v + (m + g * v) * T);
  else {
    const T = g * Math.sqrt(b * b - 1);
    y = (A) => {
      const k = Math.exp(-b * g * A), w = Math.min(T * A, 300);
      return o - k * ((m + b * g * v) * Math.sinh(w) + T * v * Math.cosh(w)) / T;
    };
  }
  const P = {
    calculatedDuration: p && h || null,
    next: (T) => {
      const A = y(T);
      if (p)
        a.done = T >= h;
      else {
        let k = T === 0 ? m : 0;
        b < 1 && (k = T === 0 ? /* @__PURE__ */ Y(m) : Ls(y, T, A));
        const w = Math.abs(k) <= i, W = Math.abs(o - A) <= s;
        a.done = w && W;
      }
      return a.value = a.done ? o : A, a;
    },
    toString: () => {
      const T = Math.min(pn(P), ae), A = Ms((k) => P.next(T * k).value, T, 30);
      return T + "ms " + A;
    },
    toTransition: () => {
    }
  };
  return P;
}
le.applyToOptions = (t) => {
  const e = Or(t, 100, le);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ Y(e.duration), t.type = "keyframes", t;
};
function ke({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], d = {
    done: !1,
    value: h
  }, p = (w) => a !== void 0 && w < a || l !== void 0 && w > l, m = (w) => a === void 0 ? l : l === void 0 || Math.abs(a - w) < Math.abs(l - w) ? a : l;
  let b = n * e;
  const v = h + b, g = o === void 0 ? v : o(v);
  g !== v && (b = g - h);
  const x = (w) => -b * Math.exp(-w / i), y = (w) => g + x(w), P = (w) => {
    const W = x(w), U = y(w);
    d.done = Math.abs(W) <= u, d.value = d.done ? g : U;
  };
  let T, A;
  const k = (w) => {
    p(d.value) && (T = w, A = le({
      keyframes: [d.value, m(d.value)],
      velocity: Ls(y, w, d.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: r,
      restDelta: u,
      restSpeed: c
    }));
  };
  return k(0), {
    calculatedDuration: null,
    next: (w) => {
      let W = !1;
      return !A && T === void 0 && (W = !0, P(w), k(w)), T !== void 0 && w >= T ? A.next(w - T) : (!W && P(w), d);
    }
  };
}
function Kr(t, e, n) {
  const i = [], s = n || Q.mix || Vs, r = t.length - 1;
  for (let o = 0; o < r; o++) {
    let a = s(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] || G : e;
      a = $t(l, a);
    }
    i.push(a);
  }
  return i;
}
function Hr(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const r = t.length;
  if (sn(r === e.length), r === 1)
    return () => e[0];
  if (r === 2 && e[0] === e[1])
    return () => e[1];
  const o = t[0] === t[1];
  t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Kr(e, i, s), l = a.length, u = (c) => {
    if (o && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ jt(t[h], t[h + 1], c);
    return a[h](d);
  };
  return n ? (c) => u(J(t[0], t[r - 1], c)) : u;
}
function Gr(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ jt(0, e, i);
    t.push(M(n, 1, s));
  }
}
function Xr(t) {
  const e = [0];
  return Gr(e, t.length - 1), e;
}
function Zr(t, e) {
  return t.map((n) => n * e);
}
function Yr(t, e) {
  return t.map(() => e || vs).splice(0, t.length - 1);
}
function Rt({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = ar(i) ? i.map(Bn) : Bn(i), r = {
    done: !1,
    value: e[0]
  }, o = Zr(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Xr(e),
    t
  ), a = Hr(o, e, {
    ease: Array.isArray(s) ? s : Yr(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (r.value = a(l), r.done = l >= t, r)
  };
}
const qr = (t) => t !== null;
function mn(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
  const r = t.filter(qr), a = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : r.length - 1;
  return !a || i === void 0 ? r[a] : i;
}
const Jr = {
  decay: ke,
  inertia: ke,
  tween: Rt,
  keyframes: Rt,
  spring: le
};
function Fs(t) {
  typeof t.type == "string" && (t.type = Jr[t.type]);
}
class gn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const Qr = (t) => t / 100;
class yn extends gn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== N.now() && this.tick(N.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Fs(e);
    const { type: n = Rt, repeat: i = 0, repeatDelay: s = 0, repeatType: r, velocity: o = 0 } = e;
    let { keyframes: a } = e;
    const l = n || Rt;
    l !== Rt && typeof a[0] != "number" && (this.mixKeyframes = $t(Qr, Vs(a[0], a[1])), a = [0, 100]);
    const u = l({ ...e, keyframes: a });
    r === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = pn(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: i, totalDuration: s, mixKeyframes: r, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: u = 0, keyframes: c, repeat: h, repeatType: d, repeatDelay: p, type: m, onUpdate: b, finalKeyframe: v } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), x = this.playbackSpeed >= 0 ? g < 0 : g > s;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let y = this.currentTime, P = i;
    if (h) {
      const w = Math.min(this.currentTime, s) / a;
      let W = Math.floor(w), U = w % 1;
      !U && w >= 1 && (U = 1), U === 1 && W--, W = Math.min(W, h + 1), !!(W % 2) && (d === "reverse" ? (U = 1 - U, p && (U -= p / a)) : d === "mirror" && (P = o)), y = J(0, 1, U) * a;
    }
    const T = x ? { done: !1, value: c[0] } : P.next(y);
    r && (T.value = r(T.value));
    let { done: A } = T;
    !x && l !== null && (A = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
    return k && m !== ke && (T.value = mn(c, this.options, v, this.speed)), b && b(T.value), k && this.finish(), T;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ H(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ H(e);
  }
  get time() {
    return /* @__PURE__ */ H(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ Y(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(N.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ H(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = Br, startTime: n } = this.options;
    this.driver || (this.driver = e((s) => this.tick(s))), this.options.onPlay?.();
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(N.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function ta(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const lt = (t) => t * 180 / Math.PI, Re = (t) => {
  const e = lt(Math.atan2(t[1], t[0]));
  return Ie(e);
}, ea = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Re,
  rotateZ: Re,
  skewX: (t) => lt(Math.atan(t[1])),
  skewY: (t) => lt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Ie = (t) => (t = t % 360, t < 0 && (t += 360), t), Un = Re, zn = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), $n = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), na = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: zn,
  scaleY: $n,
  scale: (t) => (zn(t) + $n(t)) / 2,
  rotateX: (t) => Ie(lt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Ie(lt(Math.atan2(-t[2], t[0]))),
  rotateZ: Un,
  rotate: Un,
  skewX: (t) => lt(Math.atan(t[4])),
  skewY: (t) => lt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Be(t) {
  return t.includes("scale") ? 1 : 0;
}
function Oe(t, e) {
  if (!t || t === "none")
    return Be(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = na, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = ea, s = a;
  }
  if (!s)
    return Be(e);
  const r = i[e], o = s[1].split(",").map(sa);
  return typeof r == "function" ? r(o) : o[r];
}
const ia = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Oe(n, e);
};
function sa(t) {
  return parseFloat(t.trim());
}
const At = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Et = new Set(At), Kn = (t) => t === Pt || t === C, oa = /* @__PURE__ */ new Set(["x", "y", "z"]), ra = At.filter((t) => !oa.has(t));
function aa(t) {
  const e = [];
  return ra.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const ut = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Oe(e, "x"),
  y: (t, { transform: e }) => Oe(e, "y")
};
ut.translateX = ut.x;
ut.translateY = ut.y;
const ht = /* @__PURE__ */ new Set();
let je = !1, We = !1, _e = !1;
function Ds() {
  if (We) {
    const t = Array.from(ht).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = aa(i);
      s.length && (n.set(i, s), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([r, o]) => {
        i.getValue(r)?.set(o);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  We = !1, je = !1, ht.forEach((t) => t.complete(_e)), ht.clear();
}
function ks() {
  ht.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (We = !0);
  });
}
function la() {
  _e = !0, ks(), Ds(), _e = !1;
}
class vn {
  constructor(e, n, i, s, r, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = r, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ht.add(this), je || (je = !0, V.read(ks), V.resolveKeyframes(Ds))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    if (e[0] === null) {
      const r = s?.get(), o = e[e.length - 1];
      if (r !== void 0)
        e[0] = r;
      else if (i && n) {
        const a = i.readValue(n, o);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = o), s && r === void 0 && s.set(e[0]);
    }
    ta(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), ht.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ht.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const ca = (t) => t.startsWith("--");
function ua(t, e, n) {
  ca(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const ha = /* @__PURE__ */ on(() => window.ScrollTimeline !== void 0), da = {};
function fa(t, e) {
  const n = /* @__PURE__ */ on(t);
  return () => da[e] ?? n();
}
const Rs = /* @__PURE__ */ fa(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Dt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Hn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Dt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Dt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Dt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Dt([0.33, 1.53, 0.69, 0.99])
};
function Is(t, e) {
  if (t)
    return typeof t == "function" ? Rs() ? Ms(t, e) : "ease-out" : bs(t) ? Dt(t) : Array.isArray(t) ? t.map((n) => Is(n, e) || Hn.easeOut) : Hn[t];
}
function pa(t, e, n, { delay: i = 0, duration: s = 300, repeat: r = 0, repeatType: o = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [e]: n
  };
  l && (c.offset = l);
  const h = Is(a, s);
  Array.isArray(h) && (c.easing = h);
  const d = {
    delay: i,
    duration: s,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: r + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  };
  return u && (d.pseudoElement = u), t.animate(c, d);
}
function Bs(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function ma({ type: t, ...e }) {
  return Bs(t) && Rs() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class ga extends gn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: r, allowFlatten: o = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!r, this.allowFlatten = o, this.options = e, sn(typeof e.type != "string");
    const u = ma(e);
    this.animation = pa(n, i, s, u, r), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !r) {
        const c = mn(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : ua(n, i, c), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ H(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ H(e);
  }
  get time() {
    return /* @__PURE__ */ H(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Y(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && ha() ? (this.animation.timeline = e, G) : n(this);
  }
}
const Os = {
  anticipate: ms,
  backInOut: ps,
  circInOut: ys
};
function ya(t) {
  return t in Os;
}
function va(t) {
  typeof t.ease == "string" && ya(t.ease) && (t.ease = Os[t.ease]);
}
const Gn = 10;
class ba extends ga {
  constructor(e) {
    va(e), Fs(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: s, element: r, ...o } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new yn({
      ...o,
      autoplay: !1
    }), l = /* @__PURE__ */ Y(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Gn).value, a.sample(l).value, Gn), a.stop();
  }
}
const Xn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(nt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function xa(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function Ta(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const r = t[t.length - 1], o = Xn(s, e), a = Xn(r, e);
  return !o || !a ? !1 : xa(t) || (n === "spring" || Bs(n)) && i;
}
function Ne(t) {
  t.duration = 0, t.type = "keyframes";
}
const Ca = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Sa = /* @__PURE__ */ on(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function wa(t) {
  const { motionValue: e, name: n, repeatDelay: i, repeatType: s, damping: r, type: o } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return Sa() && n && Ca.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !i && s !== "mirror" && r !== 0 && o !== "inertia";
}
const Pa = 40;
class Aa extends gn {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: r = 0, repeatType: o = "loop", keyframes: a, name: l, motionValue: u, element: c, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = N.now();
    const d = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: r,
      repeatType: o,
      name: l,
      motionValue: u,
      element: c,
      ...h
    }, p = c?.KeyframeResolver || vn;
    this.keyframeResolver = new p(a, (m, b, v) => this.onKeyframesResolved(m, b, d, !v), l, u, c), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: r, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c } = i;
    this.resolvedAt = N.now(), Ta(e, r, o, a) || ((Q.instantAnimations || !l) && c?.(mn(e, i, n)), e[0] = e[e.length - 1], Ne(i), i.repeat = 0);
    const d = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > Pa ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, p = !u && wa(d) ? new ba({
      ...d,
      element: d.motionValue.owner.current
    }) : new yn(d);
    p.finished.then(() => this.notifyFinished()).catch(G), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), la()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Ea = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Va(t) {
  const e = Ea.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
function js(t, e, n = 1) {
  const [i, s] = Va(t);
  if (!i)
    return;
  const r = window.getComputedStyle(e).getPropertyValue(i);
  if (r) {
    const o = r.trim();
    return rs(o) ? parseFloat(o) : o;
  }
  return un(s) ? js(s, e, n + 1) : s;
}
function bn(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const Ws = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...At
]), Ma = {
  test: (t) => t === "auto",
  parse: (t) => t
}, _s = (t) => (e) => e.test(t), Ns = [Pt, C, q, tt, xr, br, Ma], Zn = (t) => Ns.find(_s(t));
function La(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || ls(t) : !0;
}
const Fa = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Da(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(hn) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let r = Fa.has(e) ? 1 : 0;
  return i !== n && (r *= 100), e + "(" + r + s + ")";
}
const ka = /\b([a-z-]*)\(.*?\)/gu, Ue = {
  ...nt,
  getAnimatableNone: (t) => {
    const e = t.match(ka);
    return e ? e.map(Da).join(" ") : t;
  }
}, Yn = {
  ...Pt,
  transform: Math.round
}, Ra = {
  rotate: tt,
  rotateX: tt,
  rotateY: tt,
  rotateZ: tt,
  scale: Zt,
  scaleX: Zt,
  scaleY: Zt,
  scaleZ: Zt,
  skew: tt,
  skewX: tt,
  skewY: tt,
  distance: C,
  translateX: C,
  translateY: C,
  translateZ: C,
  x: C,
  y: C,
  z: C,
  perspective: C,
  transformPerspective: C,
  opacity: Wt,
  originX: On,
  originY: On,
  originZ: C
}, xn = {
  // Border props
  borderWidth: C,
  borderTopWidth: C,
  borderRightWidth: C,
  borderBottomWidth: C,
  borderLeftWidth: C,
  borderRadius: C,
  radius: C,
  borderTopLeftRadius: C,
  borderTopRightRadius: C,
  borderBottomRightRadius: C,
  borderBottomLeftRadius: C,
  // Positioning props
  width: C,
  maxWidth: C,
  height: C,
  maxHeight: C,
  top: C,
  right: C,
  bottom: C,
  left: C,
  // Spacing props
  padding: C,
  paddingTop: C,
  paddingRight: C,
  paddingBottom: C,
  paddingLeft: C,
  margin: C,
  marginTop: C,
  marginRight: C,
  marginBottom: C,
  marginLeft: C,
  // Misc
  backgroundPositionX: C,
  backgroundPositionY: C,
  ...Ra,
  zIndex: Yn,
  // SVG
  fillOpacity: Wt,
  strokeOpacity: Wt,
  numOctaves: Yn
}, Ia = {
  ...xn,
  // Color props
  color: D,
  backgroundColor: D,
  outlineColor: D,
  fill: D,
  stroke: D,
  // Border props
  borderColor: D,
  borderTopColor: D,
  borderRightColor: D,
  borderBottomColor: D,
  borderLeftColor: D,
  filter: Ue,
  WebkitFilter: Ue
}, Us = (t) => Ia[t];
function zs(t, e) {
  let n = Us(t);
  return n !== Ue && (n = nt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Ba = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Oa(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const r = t[i];
    typeof r == "string" && !Ba.has(r) && _t(r).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const r of e)
      t[r] = zs(n, s);
}
class ja extends vn {
  constructor(e, n, i, s, r) {
    super(e, n, i, s, r, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), un(u))) {
        const c = js(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Ws.has(i) || e.length !== 2)
      return;
    const [s, r] = e, o = Zn(s), a = Zn(r);
    if (o !== a)
      if (Kn(o) && Kn(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else ut[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      (e[s] === null || La(e[s])) && i.push(s);
    i.length && Oa(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ut[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const s = e.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const r = i.length - 1, o = i[r];
    i[r] = ut[n](e.measureViewportBox(), window.getComputedStyle(e.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([a, l]) => {
      e.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function $s(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    const s = document.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t);
}
const Ks = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Wa(t) {
  return as(t) && "offsetHeight" in t;
}
const qn = 30, _a = (t) => !isNaN(parseFloat(t));
class Na {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      const s = N.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const r of this.dependents)
          r.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = N.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = _a(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new rn());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), V.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = N.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > qn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, qn);
    return cs(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ct(t, e) {
  return new Na(t, e);
}
const { schedule: Tn } = /* @__PURE__ */ xs(queueMicrotask, !1), Z = {
  x: !1,
  y: !1
};
function Hs() {
  return Z.x || Z.y;
}
function Ua(t) {
  return t === "x" || t === "y" ? Z[t] ? null : (Z[t] = !0, () => {
    Z[t] = !1;
  }) : Z.x || Z.y ? null : (Z.x = Z.y = !0, () => {
    Z.x = Z.y = !1;
  });
}
function Gs(t, e) {
  const n = $s(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function Jn(t) {
  return !(t.pointerType === "touch" || Hs());
}
function za(t, e, n = {}) {
  const [i, s, r] = Gs(t, n), o = (a) => {
    if (!Jn(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (h) => {
      Jn(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return i.forEach((a) => {
    a.addEventListener("pointerenter", o, s);
  }), r;
}
const Xs = (t, e) => e ? t === e ? !0 : Xs(t, e.parentElement) : !1, Cn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, $a = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ka(t) {
  return $a.has(t.tagName) || t.tabIndex !== -1;
}
const ee = /* @__PURE__ */ new WeakSet();
function Qn(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function xe(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Ha = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Qn(() => {
    if (ee.has(n))
      return;
    xe(n, "down");
    const s = Qn(() => {
      xe(n, "up");
    }), r = () => xe(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", r, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function ti(t) {
  return Cn(t) && !Hs();
}
function Ga(t, e, n = {}) {
  const [i, s, r] = Gs(t, n), o = (a) => {
    const l = a.currentTarget;
    if (!ti(a))
      return;
    ee.add(l);
    const u = e(l, a), c = (p, m) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), ee.has(l) && ee.delete(l), ti(p) && typeof u == "function" && u(p, { success: m });
    }, h = (p) => {
      c(p, l === window || l === document || n.useGlobalTarget || Xs(l, p.target));
    }, d = (p) => {
      c(p, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", d, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), Wa(a) && (a.addEventListener("focus", (u) => Ha(u, s)), !Ka(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), r;
}
function Zs(t) {
  return as(t) && "ownerSVGElement" in t;
}
function Xa(t) {
  return Zs(t) && t.tagName === "svg";
}
const B = (t) => !!(t && t.getVelocity), Za = [...Ns, D, nt], Ya = (t) => Za.find(_s(t)), Ys = wt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function qa(t = !0) {
  const e = _(tn);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, r = Ho();
  dt(() => {
    if (t)
      return s(r);
  }, [t]);
  const o = is(() => t && i && i(r), [r, i, t]);
  return !n && i ? [!1, o] : [!0];
}
const qs = wt({ strict: !1 }), ei = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, St = {};
for (const t in ei)
  St[t] = {
    isEnabled: (e) => ei[t].some((n) => !!e[n])
  };
function Ja(t) {
  for (const e in t)
    St[e] = {
      ...St[e],
      ...t[e]
    };
}
const Qa = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ce(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Qa.has(t);
}
let Js = (t) => !ce(t);
function tl(t) {
  typeof t == "function" && (Js = (e) => e.startsWith("on") ? !ce(e) : t(e));
}
try {
  tl(require("@emotion/is-prop-valid").default);
} catch {
}
function el(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Js(s) || n === !0 && ce(s) || !e && !ce(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const de = /* @__PURE__ */ wt({});
function fe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Nt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Sn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], wn = ["initial", ...Sn];
function pe(t) {
  return fe(t.animate) || wn.some((e) => Nt(t[e]));
}
function Qs(t) {
  return !!(pe(t) || t.variants);
}
function nl(t, e) {
  if (pe(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || Nt(n) ? n : void 0,
      animate: Nt(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function il(t) {
  const { initial: e, animate: n } = nl(t, _(de));
  return he(() => ({ initial: e, animate: n }), [ni(e), ni(n)]);
}
function ni(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Ut = {};
function sl(t) {
  for (const e in t)
    Ut[e] = t[e], cn(e) && (Ut[e].isCSSVariable = !0);
}
function to(t, { layout: e, layoutId: n }) {
  return Et.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ut[t] || t === "opacity");
}
const ol = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, rl = At.length;
function al(t, e, n) {
  let i = "", s = !0;
  for (let r = 0; r < rl; r++) {
    const o = At[r], a = t[o];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Ks(a, xn[o]);
      if (!l) {
        s = !1;
        const c = ol[o] || o;
        i += `${c}(${u}) `;
      }
      n && (e[o] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function Pn(t, e, n) {
  const { style: i, vars: s, transformOrigin: r } = t;
  let o = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (Et.has(l)) {
      o = !0;
      continue;
    } else if (cn(l)) {
      s[l] = u;
      continue;
    } else {
      const c = Ks(u, xn[l]);
      l.startsWith("origin") ? (a = !0, r[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (o || n ? i.transform = al(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = r;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const An = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function eo(t, e, n) {
  for (const i in e)
    !B(e[i]) && !to(i, n) && (t[i] = e[i]);
}
function ll({ transformTemplate: t }, e) {
  return he(() => {
    const n = An();
    return Pn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function cl(t, e) {
  const n = t.style || {}, i = {};
  return eo(i, n, t), Object.assign(i, ll(t, e)), i;
}
function ul(t, e) {
  const n = {}, i = cl(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const hl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, dl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function fl(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const r = s ? hl : dl;
  t[r.offset] = C.transform(-i);
  const o = C.transform(e), a = C.transform(n);
  t[r.array] = `${o} ${a}`;
}
function no(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: s,
  pathSpacing: r = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  if (Pn(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: d } = t;
  h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = c?.transformBox ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), s !== void 0 && fl(h, s, r, o, !1);
}
const io = () => ({
  ...An(),
  attrs: {}
}), so = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function pl(t, e, n, i) {
  const s = he(() => {
    const r = io();
    return no(r, e, so(i), t.transformTemplate, t.style), {
      ...r.attrs,
      style: { ...r.style }
    };
  }, [e]);
  if (t.style) {
    const r = {};
    eo(r, t.style, t), s.style = { ...r, ...s.style };
  }
  return s;
}
const ml = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function En(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(ml.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function gl(t, e, n, { latestValues: i }, s, r = !1) {
  const a = (En(t) ? pl : ul)(e, i, s, t), l = el(e, typeof t == "string", r), u = t !== ns ? { ...l, ...a, ref: n } : {}, { children: c } = e, h = he(() => B(c) ? c.get() : c, [c]);
  return $o(t, {
    ...u,
    children: h
  });
}
function ii(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Vn(t, e, n, i) {
  if (typeof e == "function") {
    const [s, r] = ii(i);
    e = e(n !== void 0 ? n : t.custom, s, r);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, r] = ii(i);
    e = e(n !== void 0 ? n : t.custom, s, r);
  }
  return e;
}
function ne(t) {
  return B(t) ? t.get() : t;
}
function yl({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, s) {
  return {
    latestValues: vl(n, i, s, t),
    renderState: e()
  };
}
function vl(t, e, n, i) {
  const s = {}, r = i(t, {});
  for (const d in r)
    s[d] = ne(r[d]);
  let { initial: o, animate: a } = t;
  const l = pe(t), u = Qs(t);
  e && u && !l && t.inherit !== !1 && (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const h = c ? a : o;
  if (h && typeof h != "boolean" && !fe(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let p = 0; p < d.length; p++) {
      const m = Vn(t, d[p]);
      if (m) {
        const { transitionEnd: b, transition: v, ...g } = m;
        for (const x in g) {
          let y = g[x];
          if (Array.isArray(y)) {
            const P = c ? y.length - 1 : 0;
            y = y[P];
          }
          y !== null && (s[x] = y);
        }
        for (const x in b)
          s[x] = b[x];
      }
    }
  }
  return s;
}
const oo = (t) => (e, n) => {
  const i = _(de), s = _(tn), r = () => yl(t, e, i, s);
  return n ? r() : Qo(r);
};
function Mn(t, e, n) {
  const { style: i } = t, s = {};
  for (const r in i)
    (B(i[r]) || e.style && B(e.style[r]) || to(r, t) || n?.getValue(r)?.liveStyle !== void 0) && (s[r] = i[r]);
  return s;
}
const bl = /* @__PURE__ */ oo({
  scrapeMotionValuesFromProps: Mn,
  createRenderState: An
});
function ro(t, e, n) {
  const i = Mn(t, e, n);
  for (const s in t)
    if (B(t[s]) || B(e[s])) {
      const r = At.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[r] = t[s];
    }
  return i;
}
const xl = /* @__PURE__ */ oo({
  scrapeMotionValuesFromProps: ro,
  createRenderState: io
}), Tl = Symbol.for("motionComponentSymbol");
function gt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Cl(t, e, n) {
  return is(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : gt(n) && (n.current = i));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [e]
  );
}
const Ln = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Sl = "framerAppearId", ao = "data-" + Ln(Sl), lo = wt({});
function wl(t, e, n, i, s) {
  const { visualElement: r } = _(de), o = _(qs), a = _(tn), l = _(Ys).reducedMotion, u = ct(null);
  i = i || o.renderer, !u.current && i && (u.current = i(t, {
    visualState: e,
    parent: r,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, h = _(lo);
  c && !c.projection && s && (c.type === "html" || c.type === "svg") && Pl(u.current, n, s, h);
  const d = ct(!1);
  Go(() => {
    c && d.current && c.update(n, a);
  });
  const p = n[ao], m = ct(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
  return tr(() => {
    c && (d.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), m.current && c.animationState && c.animationState.animateChanges());
  }), dt(() => {
    c && (!m.current && c.animationState && c.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(p);
    }), m.current = !1), c.enteringChildren = void 0);
  }), c;
}
function Pl(t, e, n, i) {
  const { layoutId: s, layout: r, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : co(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: r,
    alwaysMeasureLayout: !!o || a && gt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof r == "string" ? r : "both",
    initialPromotionConfig: i,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function co(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : co(t.parent);
}
function Te(t, { forwardMotionProps: e = !1 } = {}, n, i) {
  n && Ja(n);
  const s = En(t) ? xl : bl;
  function r(a, l) {
    let u;
    const c = {
      ..._(Ys),
      ...a,
      layoutId: Al(a)
    }, { isStatic: h } = c, d = il(a), p = s(a, h);
    if (!h && Qe) {
      El();
      const m = Vl(c);
      u = m.MeasureLayout, d.visualElement = wl(t, p, c, i, m.ProjectionNode);
    }
    return S(de.Provider, { value: d, children: [u && d.visualElement ? f(u, { visualElement: d.visualElement, ...c }) : null, gl(t, a, Cl(p, d.visualElement, l), p, h, e)] });
  }
  r.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const o = Ko(r);
  return o[Tl] = t, o;
}
function Al({ layoutId: t }) {
  const e = _(os).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function El(t, e) {
  _(qs).strict;
}
function Vl(t) {
  const { drag: e, layout: n } = St;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
function Ml(t, e) {
  if (typeof Proxy > "u")
    return Te;
  const n = /* @__PURE__ */ new Map(), i = (r, o) => Te(r, o, t, e), s = (r, o) => i(r, o);
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? i : (n.has(o) || n.set(o, Te(o, void 0, t, e)), n.get(o))
  });
}
function uo({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function Ll({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Fl(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function Ce(t) {
  return t === void 0 || t === 1;
}
function ze({ scale: t, scaleX: e, scaleY: n }) {
  return !Ce(t) || !Ce(e) || !Ce(n);
}
function rt(t) {
  return ze(t) || ho(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function ho(t) {
  return si(t.x) || si(t.y);
}
function si(t) {
  return t && t !== "0%";
}
function ue(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function oi(t, e, n, i, s) {
  return s !== void 0 && (t = ue(t, s, i)), ue(t, n, i) + e;
}
function $e(t, e = 0, n = 1, i, s) {
  t.min = oi(t.min, e, n, i, s), t.max = oi(t.max, e, n, i, s);
}
function fo(t, { x: e, y: n }) {
  $e(t.x, e.translate, e.scale, e.originPoint), $e(t.y, n.translate, n.scale, n.originPoint);
}
const ri = 0.999999999999, ai = 1.0000000000001;
function Dl(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let r, o;
  for (let a = 0; a < s; a++) {
    r = n[a], o = r.projectionDelta;
    const { visualElement: l } = r.options;
    l && l.props.style && l.props.style.display === "contents" || (i && r.options.layoutScroll && r.scroll && r !== r.root && vt(t, {
      x: -r.scroll.offset.x,
      y: -r.scroll.offset.y
    }), o && (e.x *= o.x.scale, e.y *= o.y.scale, fo(t, o)), i && rt(r.latestValues) && vt(t, r.latestValues));
  }
  e.x < ai && e.x > ri && (e.x = 1), e.y < ai && e.y > ri && (e.y = 1);
}
function yt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function li(t, e, n, i, s = 0.5) {
  const r = M(t.min, t.max, s);
  $e(t, e, n, r, i);
}
function vt(t, e) {
  li(t.x, e.x, e.scaleX, e.scale, e.originX), li(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function po(t, e) {
  return uo(Fl(t.getBoundingClientRect(), e));
}
function kl(t, e, n) {
  const i = po(t, n), { scroll: s } = e;
  return s && (yt(i.x, s.offset.x), yt(i.y, s.offset.y)), i;
}
const ci = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), bt = () => ({
  x: ci(),
  y: ci()
}), ui = () => ({ min: 0, max: 0 }), F = () => ({
  x: ui(),
  y: ui()
}), Ke = { current: null }, mo = { current: !1 };
function Rl() {
  if (mo.current = !0, !!Qe)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Ke.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      Ke.current = !1;
}
const Il = /* @__PURE__ */ new WeakMap();
function Bl(t, e, n) {
  for (const i in e) {
    const s = e[i], r = n[i];
    if (B(s))
      t.addValue(i, s);
    else if (B(r))
      t.addValue(i, Ct(s, { owner: t }));
    else if (r !== s)
      if (t.hasValue(i)) {
        const o = t.getValue(i);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = t.getStaticValue(i);
        t.addValue(i, Ct(o !== void 0 ? o : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const hi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Ol {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: r, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = vn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = N.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, V.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = o;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = pe(n), this.isVariantNode = Qs(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const p = h[d];
      l[d] !== void 0 && B(p) && p.set(l[d]);
    }
  }
  mount(e) {
    this.current = e, Il.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), mo.current || Rl(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ke.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), et(this.notifyUpdate), et(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = Et.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      this.latestValues[e] = o, this.props.onUpdate && V.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in St) {
      const n = St[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const r = this.features[e];
        r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : F();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < hi.length; i++) {
      const s = hi[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const r = "on" + s, o = e[r];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = Bl(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = Ct(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (rs(i) || ls(i)) ? i = parseFloat(i) : !Ya(i) && nt.test(n) && (i = zs(e, n)), this.setBaseTarget(e, B(i) ? i.get() : i)), B(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const r = Vn(this.props, n, this.presenceContext?.custom);
      r && (i = r[e]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !B(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new rn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Tn.render(this.render);
  }
}
class go extends Ol {
  constructor() {
    super(...arguments), this.KeyframeResolver = ja;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    B(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function yo(t, { style: e, vars: n }, i, s) {
  const r = t.style;
  let o;
  for (o in e)
    r[o] = e[o];
  s?.applyProjectionStyles(r, i);
  for (o in n)
    r.setProperty(o, n[o]);
}
function jl(t) {
  return window.getComputedStyle(t);
}
class Wl extends go {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = yo;
  }
  readValueFromInstance(e, n) {
    if (Et.has(n))
      return this.projection?.isProjecting ? Be(n) : ia(e, n);
    {
      const i = jl(e), s = (cn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return po(e, n);
  }
  build(e, n, i) {
    Pn(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Mn(e, n, i);
  }
}
const vo = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function _l(t, e, n, i) {
  yo(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(vo.has(s) ? s : Ln(s), e.attrs[s]);
}
class Nl extends go {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = F;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Et.has(n)) {
      const i = Us(n);
      return i && i.default || 0;
    }
    return n = vo.has(n) ? n : Ln(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return ro(e, n, i);
  }
  build(e, n, i) {
    no(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, s) {
    _l(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = so(e.tagName), super.mount(e);
  }
}
const Ul = (t, e) => En(t) ? new Nl(e) : new Wl(e, {
  allowProjection: t !== ns
});
function xt(t, e, n) {
  const i = t.getProps();
  return Vn(i, e, n !== void 0 ? n : i.custom, t);
}
const He = (t) => Array.isArray(t);
function zl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ct(n));
}
function $l(t) {
  return He(t) ? t[t.length - 1] || 0 : t;
}
function Kl(t, e) {
  const n = xt(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...r } = n || {};
  r = { ...r, ...i };
  for (const o in r) {
    const a = $l(r[o]);
    zl(t, o, a);
  }
}
function Hl(t) {
  return !!(B(t) && t.add);
}
function Ge(t, e) {
  const n = t.getValue("willChange");
  if (Hl(n))
    return n.add(e);
  if (!n && Q.WillChange) {
    const i = new Q.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function bo(t) {
  return t.props[ao];
}
const Gl = (t) => t !== null;
function Xl(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(Gl), r = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return s[r];
}
const Zl = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Yl = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ql = {
  type: "keyframes",
  duration: 0.8
}, Jl = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ql = (t, { keyframes: e }) => e.length > 2 ? ql : Et.has(t) ? t.startsWith("scale") ? Yl(e[1]) : Zl : Jl;
function tc({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: r, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const Fn = (t, e, n, i = {}, s, r) => (o) => {
  const a = bn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ Y(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (d) => {
      e.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: r ? void 0 : s
  };
  tc(a) || Object.assign(c, Ql(t, c)), c.duration && (c.duration = /* @__PURE__ */ Y(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ Y(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (Ne(c), c.delay === 0 && (h = !0)), (Q.instantAnimations || Q.skipAnimations) && (h = !0, Ne(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !r && e.get() !== void 0) {
    const d = Xl(c.keyframes, a);
    if (d !== void 0) {
      V.update(() => {
        c.onUpdate(d), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new yn(c) : new Aa(c);
};
function ec({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function xo(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: r = t.getDefaultTransition(), transitionEnd: o, ...a } = e;
  i && (r = i);
  const l = [], u = s && t.animationState && t.animationState.getState()[s];
  for (const c in a) {
    const h = t.getValue(c, t.latestValues[c] ?? null), d = a[c];
    if (d === void 0 || u && ec(u, c))
      continue;
    const p = {
      delay: n,
      ...bn(r || {}, c)
    }, m = h.get();
    if (m !== void 0 && !h.isAnimating && !Array.isArray(d) && d === m && !p.velocity)
      continue;
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const g = bo(t);
      if (g) {
        const x = window.MotionHandoffAnimation(g, c, V);
        x !== null && (p.startTime = x, b = !0);
      }
    }
    Ge(t, c), h.start(Fn(c, h, d, t.shouldReduceMotion && Ws.has(c) ? { type: !1 } : p, t, b));
    const v = h.animation;
    v && l.push(v);
  }
  return o && Promise.all(l).then(() => {
    V.update(() => {
      o && Kl(t, o);
    });
  }), l;
}
function To(t, e, n, i = 0, s = 1) {
  const r = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), o = t.size, a = (o - 1) * i;
  return typeof n == "function" ? n(r, o) : s === 1 ? r * i : a - r * i;
}
function Xe(t, e, n = {}) {
  const i = xt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const r = i ? () => Promise.all(xo(t, i, n)) : () => Promise.resolve(), o = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: h } = s;
    return nc(t, e, l, u, c, h, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [r, o] : [o, r];
    return l().then(() => u());
  } else
    return Promise.all([r(), o(n.delay)]);
}
function nc(t, e, n = 0, i = 0, s = 0, r = 1, o) {
  const a = [];
  for (const l of t.variantChildren)
    l.notify("AnimationStart", e), a.push(Xe(l, e, {
      ...o,
      delay: n + (typeof i == "function" ? 0 : i) + To(t.variantChildren, l, i, s, r)
    }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function ic(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((r) => Xe(t, r, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = Xe(t, e, n);
  else {
    const s = typeof e == "function" ? xt(t, e, n.custom) : e;
    i = Promise.all(xo(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Co(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const sc = wn.length;
function So(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? So(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < sc; n++) {
    const i = wn[n], s = t.props[i];
    (Nt(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const oc = [...Sn].reverse(), rc = Sn.length;
function ac(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => ic(t, n, i)));
}
function lc(t) {
  let e = ac(t), n = di(), i = !0;
  const s = (l) => (u, c) => {
    const h = xt(t, c, l === "exit" ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: d, transitionEnd: p, ...m } = h;
      u = { ...u, ...m, ...p };
    }
    return u;
  };
  function r(l) {
    e = l(t);
  }
  function o(l) {
    const { props: u } = t, c = So(t.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let p = {}, m = 1 / 0;
    for (let v = 0; v < rc; v++) {
      const g = oc[v], x = n[g], y = u[g] !== void 0 ? u[g] : c[g], P = Nt(y), T = g === l ? x.isActive : null;
      T === !1 && (m = v);
      let A = y === c[g] && y !== u[g] && P;
      if (A && i && t.manuallyAnimateOnMount && (A = !1), x.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && T === null || // If we didn't and don't have any defined prop for this animation type
      !y && !x.prevProp || // Or if the prop doesn't define an animation
      fe(y) || typeof y == "boolean")
        continue;
      const k = cc(x.prevProp, y);
      let w = k || // If we're making this variant active, we want to always make it active
      g === l && x.isActive && !A && P || // If we removed a higher-priority variant (i is in reverse order)
      v > m && P, W = !1;
      const U = Array.isArray(y) ? y : [y];
      let ft = U.reduce(s(g), {});
      T === !1 && (ft = {});
      const { prevResolvedValues: Dn = {} } = x, _o = {
        ...Dn,
        ...ft
      }, kn = (R) => {
        w = !0, d.has(R) && (W = !0, d.delete(R)), x.needsAnimating[R] = !0;
        const z = t.getValue(R);
        z && (z.liveStyle = !1);
      };
      for (const R in _o) {
        const z = ft[R], st = Dn[R];
        if (p.hasOwnProperty(R))
          continue;
        let pt = !1;
        He(z) && He(st) ? pt = !Co(z, st) : pt = z !== st, pt ? z != null ? kn(R) : d.add(R) : z !== void 0 && d.has(R) ? kn(R) : x.protectedKeys[R] = !0;
      }
      x.prevProp = y, x.prevResolvedValues = ft, x.isActive && (p = { ...p, ...ft }), i && t.blockInitialAnimation && (w = !1);
      const Rn = A && k;
      w && (!Rn || W) && h.push(...U.map((R) => {
        const z = { type: g };
        if (typeof R == "string" && i && !Rn && t.manuallyAnimateOnMount && t.parent) {
          const { parent: st } = t, pt = xt(st, R);
          if (st.enteringChildren && pt) {
            const { delayChildren: No } = pt.transition || {};
            z.delay = To(st.enteringChildren, t, No);
          }
        }
        return {
          animation: R,
          options: z
        };
      }));
    }
    if (d.size) {
      const v = {};
      if (typeof u.initial != "boolean") {
        const g = xt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (v.transition = g.transition);
      }
      d.forEach((g) => {
        const x = t.getBaseTarget(g), y = t.getValue(g);
        y && (y.liveStyle = !0), v[g] = x ?? null;
      }), h.push({ animation: v });
    }
    let b = !!h.length;
    return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (b = !1), i = !1, b ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    if (n[l].isActive === u)
      return Promise.resolve();
    t.variantChildren?.forEach((h) => h.animationState?.setActive(l, u)), n[l].isActive = u;
    const c = o(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      n = di();
    }
  };
}
function cc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Co(e, t) : !1;
}
function ot(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function di() {
  return {
    animate: ot(!0),
    whileInView: ot(),
    whileHover: ot(),
    whileTap: ot(),
    whileDrag: ot(),
    whileFocus: ot(),
    exit: ot()
  };
}
class it {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class uc extends it {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = lc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    fe(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let hc = 0;
class dc extends it {
  constructor() {
    super(...arguments), this.id = hc++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const fc = {
  animation: {
    Feature: uc
  },
  exit: {
    Feature: dc
  }
};
function zt(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function Gt(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const pc = (t) => (e) => Cn(e) && t(e, Gt(e));
function It(t, e, n, i) {
  return zt(t, e, pc(n), i);
}
const wo = 1e-4, mc = 1 - wo, gc = 1 + wo, Po = 0.01, yc = 0 - Po, vc = 0 + Po;
function O(t) {
  return t.max - t.min;
}
function bc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function fi(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = M(e.min, e.max, t.origin), t.scale = O(n) / O(e), t.translate = M(n.min, n.max, t.origin) - t.originPoint, (t.scale >= mc && t.scale <= gc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= yc && t.translate <= vc || isNaN(t.translate)) && (t.translate = 0);
}
function Bt(t, e, n, i) {
  fi(t.x, e.x, n.x, i ? i.originX : void 0), fi(t.y, e.y, n.y, i ? i.originY : void 0);
}
function pi(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + O(e);
}
function xc(t, e, n) {
  pi(t.x, e.x, n.x), pi(t.y, e.y, n.y);
}
function mi(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + O(e);
}
function Ot(t, e, n) {
  mi(t.x, e.x, n.x), mi(t.y, e.y, n.y);
}
function K(t) {
  return [t("x"), t("y")];
}
const Ao = ({ current: t }) => t ? t.ownerDocument.defaultView : null, gi = (t, e) => Math.abs(t - e);
function Tc(t, e) {
  const n = gi(t.x, e.x), i = gi(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Eo {
  constructor(e, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: r = !1, distanceThreshold: o = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = we(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, m = Tc(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!p && !m)
        return;
      const { point: b } = d, { timestamp: v } = I;
      this.history.push({ ...b, timestamp: v });
      const { onStart: g, onMove: x } = this.handlers;
      p || (g && g(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, p) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Se(p, this.transformPagePoint), V.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, p) => {
      this.end();
      const { onEnd: m, onSessionEnd: b, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = we(d.type === "pointercancel" ? this.lastMoveEventInfo : Se(p, this.transformPagePoint), this.history);
      this.startEvent && m && m(d, g), b && b(d, g);
    }, !Cn(e))
      return;
    this.dragSnapToOrigin = r, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = o, this.contextWindow = s || window;
    const a = Gt(e), l = Se(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = I;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(e, we(l, this.history)), this.removeListeners = $t(It(this.contextWindow, "pointermove", this.handlePointerMove), It(this.contextWindow, "pointerup", this.handlePointerUp), It(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), et(this.updatePoint);
  }
}
function Se(t, e) {
  return e ? { point: e(t.point) } : t;
}
function yi(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function we({ point: t }, e) {
  return {
    point: t,
    delta: yi(t, Vo(e)),
    offset: yi(t, Cc(e)),
    velocity: Sc(e, 0.1)
  };
}
function Cc(t) {
  return t[0];
}
function Vo(t) {
  return t[t.length - 1];
}
function Sc(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Vo(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ Y(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const r = /* @__PURE__ */ H(s.timestamp - i.timestamp);
  if (r === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (s.x - i.x) / r,
    y: (s.y - i.y) / r
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function wc(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? M(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? M(n, t, i.max) : Math.min(t, n)), t;
}
function vi(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Pc(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: vi(t.x, n, s),
    y: vi(t.y, e, i)
  };
}
function bi(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Ac(t, e) {
  return {
    x: bi(t.x, e.x),
    y: bi(t.y, e.y)
  };
}
function Ec(t, e) {
  let n = 0.5;
  const i = O(t), s = O(e);
  return s > i ? n = /* @__PURE__ */ jt(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ jt(t.min, t.max - s, e.min)), J(0, 1, n);
}
function Vc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Ze = 0.35;
function Mc(t = Ze) {
  return t === !1 ? t = 0 : t === !0 && (t = Ze), {
    x: xi(t, "left", "right"),
    y: xi(t, "top", "bottom")
  };
}
function xi(t, e, n) {
  return {
    min: Ti(t, e),
    max: Ti(t, n)
  };
}
function Ti(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Lc = /* @__PURE__ */ new WeakMap();
class Fc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = F(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const r = (h) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Gt(h).point);
    }, o = (h, d) => {
      const { drag: p, dragPropagation: m, onDragStart: b } = this.getProps();
      if (p && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = Ua(p), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = d, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), K((g) => {
        let x = this.getAxisMotionValue(g).get() || 0;
        if (q.test(x)) {
          const { projection: y } = this.visualElement;
          if (y && y.layout) {
            const P = y.layout.layoutBox[g];
            P && (x = O(P) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[g] = x;
      }), b && V.postRender(() => b(h, d)), Ge(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, a = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d;
      const { dragPropagation: p, dragDirectionLock: m, onDirectionLock: b, onDrag: v } = this.getProps();
      if (!p && !this.openDragLock)
        return;
      const { offset: g } = d;
      if (m && this.currentDirection === null) {
        this.currentDirection = Dc(g), this.currentDirection !== null && b && b(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, g), this.updateAxis("y", d.point, g), this.visualElement.render(), v && v(h, d);
    }, l = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d, this.stop(h, d), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => K((h) => this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Eo(e, {
      onSessionStart: r,
      onStart: o,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: i,
      contextWindow: Ao(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const i = e || this.latestPointerEvent, s = n || this.latestPanInfo, r = this.isDragging;
    if (this.cancel(), !r || !s || !i)
      return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && V.postRender(() => a(i, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !Yt(e, s, this.currentDirection))
      return;
    const r = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (o = wc(o, this.constraints[e], this.elastic[e])), r.set(o);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    e && gt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = Pc(i.layoutBox, e) : this.constraints = !1, this.elastic = Mc(n), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && K((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Vc(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !gt(e))
      return !1;
    const i = e.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const r = kl(i, s.root, this.visualElement.getTransformPagePoint());
    let o = Ac(s.layout.layoutBox, r);
    if (n) {
      const a = n(Ll(o));
      this.hasMutatedConstraints = !!a, a && (o = uo(a));
    }
    return o;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = K((c) => {
      if (!Yt(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      o && (h = { min: 0, max: 0 });
      const d = s ? 200 : 1e6, p = s ? 40 : 1e7, m = {
        type: "inertia",
        velocity: i ? e[c] : 0,
        bounceStiffness: d,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...r,
        ...h
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return Ge(this.visualElement, e), i.start(Fn(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    K((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    K((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), s = i[n];
    return s || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    K((n) => {
      const { drag: i } = this.getProps();
      if (!Yt(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, r = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        r.set(e[n] - M(o, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!gt(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    K((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = Ec({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), K((o) => {
      if (!Yt(o, e, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: u } = this.constraints[o];
      a.set(M(l, u, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Lc.set(this.visualElement, this);
    const e = this.visualElement.current, n = It(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      gt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, r = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), V.read(i);
    const o = zt(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (K((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      o(), n(), r(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: r = !1, dragElastic: o = Ze, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: r,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function Yt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Dc(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class kc extends it {
  constructor(e) {
    super(e), this.removeGroupControls = G, this.removeListeners = G, this.controls = new Fc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || G;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ci = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class Rc extends it {
  constructor() {
    super(...arguments), this.removePointerDownListener = G;
  }
  onPointerDown(e) {
    this.session = new Eo(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ao(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Ci(e),
      onStart: Ci(n),
      onMove: i,
      onEnd: (r, o) => {
        delete this.session, s && V.postRender(() => s(r, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = It(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ie = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Si(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Vt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (C.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Si(t, e.target.x), i = Si(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, Ic = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = nt.parse(t);
    if (s.length > 5)
      return i;
    const r = nt.createTransformer(t), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + o] /= a, s[1 + o] /= l;
    const u = M(a, l, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), r(s);
  }
};
let Pe = !1;
class Bc extends zo {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: r } = e;
    sl(Oc), r && (n.group && n.group.add(r), i && i.register && s && i.register(r), Pe && r.root.didUpdate(), r.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), r.setOptions({
      ...r.options,
      onExitComplete: () => this.safeToRemove()
    })), ie.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: r } = this.props, { projection: o } = i;
    return o && (o.isPresent = r, Pe = !0, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== r ? o.willUpdate() : this.safeToRemove(), e.isPresent !== r && (r ? o.promote() : o.relegate() || V.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Tn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    Pe = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Mo(t) {
  const [e, n] = qa(), i = _(os);
  return f(Bc, { ...t, layoutGroup: i, switchLayoutGroup: _(lo), isPresent: e, safeToRemove: n });
}
const Oc = {
  borderRadius: {
    ...Vt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Vt,
  borderTopRightRadius: Vt,
  borderBottomLeftRadius: Vt,
  borderBottomRightRadius: Vt,
  boxShadow: Ic
};
function jc(t, e, n) {
  const i = B(t) ? t : Ct(t);
  return i.start(Fn("", i, e, n)), i.animation;
}
const Wc = (t, e) => t.depth - e.depth;
class _c {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    en(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    nn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Wc), this.isDirty = !1, this.children.forEach(e);
  }
}
function Nc(t, e) {
  const n = N.now(), i = ({ timestamp: s }) => {
    const r = s - n;
    r >= e && (et(i), t(r - e));
  };
  return V.setup(i, !0), () => et(i);
}
const Lo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Uc = Lo.length, wi = (t) => typeof t == "string" ? parseFloat(t) : t, Pi = (t) => typeof t == "number" || C.test(t);
function zc(t, e, n, i, s, r) {
  s ? (t.opacity = M(0, n.opacity ?? 1, $c(i)), t.opacityExit = M(e.opacity ?? 1, 0, Kc(i))) : r && (t.opacity = M(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let o = 0; o < Uc; o++) {
    const a = `border${Lo[o]}Radius`;
    let l = Ai(e, a), u = Ai(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Pi(l) === Pi(u) ? (t[a] = Math.max(M(wi(l), wi(u), i), 0), (q.test(u) || q.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, i));
}
function Ai(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const $c = /* @__PURE__ */ Fo(0, 0.5, gs), Kc = /* @__PURE__ */ Fo(0.5, 0.95, G);
function Fo(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ jt(t, e, i));
}
function Ei(t, e) {
  t.min = e.min, t.max = e.max;
}
function $(t, e) {
  Ei(t.x, e.x), Ei(t.y, e.y);
}
function Vi(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Mi(t, e, n, i, s) {
  return t -= e, t = ue(t, 1 / n, i), s !== void 0 && (t = ue(t, 1 / s, i)), t;
}
function Hc(t, e = 0, n = 1, i = 0.5, s, r = t, o = t) {
  if (q.test(e) && (e = parseFloat(e), e = M(o.min, o.max, e / 100) - o.min), typeof e != "number")
    return;
  let a = M(r.min, r.max, i);
  t === r && (a -= e), t.min = Mi(t.min, e, n, a, s), t.max = Mi(t.max, e, n, a, s);
}
function Li(t, e, [n, i, s], r, o) {
  Hc(t, e[n], e[i], e[s], e.scale, r, o);
}
const Gc = ["x", "scaleX", "originX"], Xc = ["y", "scaleY", "originY"];
function Fi(t, e, n, i) {
  Li(t.x, e, Gc, n ? n.x : void 0, i ? i.x : void 0), Li(t.y, e, Xc, n ? n.y : void 0, i ? i.y : void 0);
}
function Di(t) {
  return t.translate === 0 && t.scale === 1;
}
function Do(t) {
  return Di(t.x) && Di(t.y);
}
function ki(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Zc(t, e) {
  return ki(t.x, e.x) && ki(t.y, e.y);
}
function Ri(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function ko(t, e) {
  return Ri(t.x, e.x) && Ri(t.y, e.y);
}
function Ii(t) {
  return O(t.x) / O(t.y);
}
function Bi(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Yc {
  constructor() {
    this.members = [];
  }
  add(e) {
    en(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (nn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0)
      return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const r = this.members[s];
      if (r.isPresent !== !1) {
        i = r;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function qc(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, r = t.y.translate / e.y, o = n?.z || 0;
  if ((s || r || o) && (i = `translate3d(${s}px, ${r}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: d, skewX: p, skewY: m } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), d && (i += `rotateY(${d}deg) `), p && (i += `skewX(${p}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const Ae = ["", "X", "Y", "Z"], Jc = 1e3;
let Qc = 0;
function Ee(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Ro(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = bo(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: r } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(s || r));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Ro(i);
}
function Io({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(o = {}, a = e?.()) {
      this.id = Qc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(nu), this.nodes.forEach(ru), this.nodes.forEach(au), this.nodes.forEach(iu);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _c());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new rn()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o) {
      if (this.instance)
        return;
      this.isSVG = Zs(o) && !Xa(o), this.instance = o;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let c, h = 0;
        const d = () => this.root.updateBlockedByResize = !1;
        V.read(() => {
          h = window.innerWidth;
        }), t(o, () => {
          const p = window.innerWidth;
          p !== h && (h = p, this.root.updateBlockedByResize = !0, c && c(), c = Nc(d, 250), ie.hasAnimatedSinceResize && (ie.hasAnimatedSinceResize = !1, this.nodes.forEach(Wi)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: d, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || du, { onLayoutAnimationStart: b, onLayoutAnimationComplete: v } = u.getProps(), g = !this.targetLayout || !ko(this.targetLayout, p), x = !h && d;
        if (this.options.layoutRoot || this.resumeFrom || x || h && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const y = {
            ...bn(m, "layout"),
            onPlay: b,
            onComplete: v
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0, y.type = !1), this.startAnimation(y), this.setAnimationOrigin(c, x);
        } else
          h || Wi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), et(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(lu), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ro(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Oi);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ji);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(ou), this.nodes.forEach(tu), this.nodes.forEach(eu)) : this.nodes.forEach(ji), this.clearAllSnapshots();
      const a = N.now();
      I.delta = J(0, 1e3 / 60, a - I.timestamp), I.timestamp = a, I.isProcessing = !0, me.update.process(I), me.preRender.process(I), me.render.process(I), I.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Tn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(su), this.sharedNodes.forEach(cu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !O(this.snapshot.measuredBox.x) && !O(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = F(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && this.instance) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Do(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && this.instance && (a || rt(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), fu(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o)
        return F();
      const a = o.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(pu))) {
        const { scroll: u } = this.root;
        u && (yt(a.x, u.offset.x), yt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      const a = F();
      if ($(a, o), this.scroll?.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: h } = u;
        u !== this.root && c && h.layoutScroll && (c.wasRoot && $(a, o), yt(a.x, c.offset.x), yt(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = F();
      $(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && vt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), rt(c.latestValues) && vt(l, c.latestValues);
      }
      return rt(this.latestValues) && vt(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = F();
      $(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !rt(u.latestValues))
          continue;
        ze(u.latestValues) && u.updateSnapshot();
        const c = F(), h = u.measurePageBox();
        $(c, h), Fi(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return rt(this.latestValues) && Fi(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== I.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: h } = this.options;
      if (!(!this.layout || !(c || h))) {
        if (this.resolvedRelativeTargetAt = I.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = F(), this.relativeTargetOrigin = F(), Ot(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = F(), this.targetWithTransforms = F()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), xc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : $(this.target, this.layout.layoutBox), fo(this.target, this.targetDelta)) : $(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = F(), this.relativeTargetOrigin = F(), Ot(this.relativeTargetOrigin, this.target, d.target), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ze(this.parent.latestValues) || ho(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const o = this.getLead(), a = !!this.resumingFrom || this !== o;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === I.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      $(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, d = this.treeScale.y;
      Dl(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = F());
      const { target: p } = o;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Vi(this.prevProjectionDelta.x, this.projectionDelta.x), Vi(this.prevProjectionDelta.y, this.projectionDelta.y)), Bt(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== d || !Bi(this.projectionDelta.x, this.prevProjectionDelta.x) || !Bi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if (this.options.visualElement?.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = bt(), this.projectionDelta = bt(), this.projectionDeltaWithTransform = bt();
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = bt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = F(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, b = p !== m, v = this.getStack(), g = !v || v.members.length <= 1, x = !!(b && !g && this.options.crossfade === !0 && !this.path.some(hu));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (P) => {
        const T = P / 1e3;
        _i(h.x, o.x, T), _i(h.y, o.y, T), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ot(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), uu(this.relativeTarget, this.relativeTargetOrigin, d, T), y && Zc(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = F()), $(y, this.relativeTarget)), b && (this.animationValues = c, zc(c, u, this.latestValues, T, x, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (et(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
        ie.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ct(0)), this.currentAnimation = jc(this.motionValue, [0, 1e3], {
          ...o,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Jc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
      if (!(!a || !l || !u)) {
        if (this !== o && this.layout && u && Bo(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || F();
          const h = O(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + h;
          const d = O(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + d;
        }
        $(a, l), vt(a, c), Bt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Yc()), this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: l } = o;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && Ee("z", o, u, this.animationValues);
      for (let c = 0; c < Ae.length; c++)
        Ee(`rotate${Ae[c]}`, o, u, this.animationValues), Ee(`skew${Ae[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = ne(a?.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = ne(a?.pointerEvents) || ""), this.hasProjected && !rt(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = qc(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (h = l(c, h)), o.transform = h;
      const { x: d, y: p } = this.projectionDelta;
      o.transformOrigin = `${d.origin * 100}% ${p.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const m in Ut) {
        if (c[m] === void 0)
          continue;
        const { correct: b, applyTo: v, isCSSVariable: g } = Ut[m], x = h === "none" ? c[m] : b(c[m], u);
        if (v) {
          const y = v.length;
          for (let P = 0; P < y; P++)
            o[v[P]] = x;
        } else
          g ? this.options.visualElement.renderState.vars[m] = x : o[m] = x;
      }
      this.options.layoutId && (o.pointerEvents = u === this ? ne(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => o.currentAnimation?.stop()), this.root.nodes.forEach(Oi), this.root.sharedNodes.clear();
    }
  };
}
function tu(t) {
  t.updateLayout();
}
function eu(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = t.layout, { animationType: s } = t.options, r = e.source !== t.layout.source;
    s === "size" ? K((c) => {
      const h = r ? e.measuredBox[c] : e.layoutBox[c], d = O(h);
      h.min = n[c].min, h.max = h.min + d;
    }) : Bo(s, e.layoutBox, n) && K((c) => {
      const h = r ? e.measuredBox[c] : e.layoutBox[c], d = O(n[c]);
      h.max = h.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[c].max = t.relativeTarget[c].min + d);
    });
    const o = bt();
    Bt(o, n, e.layoutBox);
    const a = bt();
    r ? Bt(a, t.applyTransform(i, !0), e.measuredBox) : Bt(a, n, e.layoutBox);
    const l = !Do(o);
    let u = !1;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: d } = c;
        if (h && d) {
          const p = F();
          Ot(p, e.layoutBox, h.layoutBox);
          const m = F();
          Ot(m, n, d.layoutBox), ko(p, m) || (u = !0), c.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = p, t.relativeParent = c);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: o,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function nu(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function iu(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function su(t) {
  t.clearSnapshot();
}
function Oi(t) {
  t.clearMeasurements();
}
function ji(t) {
  t.isLayoutDirty = !1;
}
function ou(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Wi(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function ru(t) {
  t.resolveTargetDelta();
}
function au(t) {
  t.calcProjection();
}
function lu(t) {
  t.resetSkewAndRotation();
}
function cu(t) {
  t.removeLeadSnapshot();
}
function _i(t, e, n) {
  t.translate = M(e.translate, 0, n), t.scale = M(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ni(t, e, n, i) {
  t.min = M(e.min, n.min, i), t.max = M(e.max, n.max, i);
}
function uu(t, e, n, i) {
  Ni(t.x, e.x, n.x, i), Ni(t.y, e.y, n.y, i);
}
function hu(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const du = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ui = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), zi = Ui("applewebkit/") && !Ui("chrome/") ? Math.round : G;
function $i(t) {
  t.min = zi(t.min), t.max = zi(t.max);
}
function fu(t) {
  $i(t.x), $i(t.y);
}
function Bo(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !bc(Ii(e), Ii(n), 0.2);
}
function pu(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const mu = Io({
  attachResizeListener: (t, e) => zt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ve = {
  current: void 0
}, Oo = Io({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Ve.current) {
      const t = new mu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Ve.current = t;
    }
    return Ve.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), gu = {
  pan: {
    Feature: Rc
  },
  drag: {
    Feature: kc,
    ProjectionNode: Oo,
    MeasureLayout: Mo
  }
};
function Ki(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, r = i[s];
  r && V.postRender(() => r(e, Gt(e)));
}
class yu extends it {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = za(e, (n, i) => (Ki(this.node, i, "Start"), (s) => Ki(this.node, s, "End"))));
  }
  unmount() {
  }
}
class vu extends it {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = $t(zt(this.node.current, "focus", () => this.onFocus()), zt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Hi(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), r = i[s];
  r && V.postRender(() => r(e, Gt(e)));
}
class bu extends it {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Ga(e, (n, i) => (Hi(this.node, i, "Start"), (s, { success: r }) => Hi(this.node, s, r ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ye = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), xu = (t) => {
  const e = Ye.get(t.target);
  e && e(t);
}, Tu = (t) => {
  t.forEach(xu);
};
function Cu({ root: t, ...e }) {
  const n = t || document;
  Me.has(n) || Me.set(n, {});
  const i = Me.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(Tu, { root: t, ...e })), i[s];
}
function Su(t, e, n) {
  const i = Cu(e);
  return Ye.set(t, n), i.observe(t), () => {
    Ye.delete(t), i.unobserve(t);
  };
}
const wu = {
  some: 0,
  all: 1
};
class Pu extends it {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: r } = e, o = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : wu[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, r && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), d = u ? c : h;
      d && d(l);
    };
    return Su(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Au(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Au({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Eu = {
  inView: {
    Feature: Pu
  },
  tap: {
    Feature: bu
  },
  focus: {
    Feature: vu
  },
  hover: {
    Feature: yu
  }
}, Vu = {
  layout: {
    ProjectionNode: Oo,
    MeasureLayout: Mo
  }
}, Mu = {
  ...fc,
  ...Eu,
  ...gu,
  ...Vu
}, j = /* @__PURE__ */ Ml(Mu, Ul), Lu = {
  some: 0,
  all: 1
};
function Fu(t, e, { root: n, margin: i, amount: s = "some" } = {}) {
  const r = $s(t), o = /* @__PURE__ */ new WeakMap(), a = (u) => {
    u.forEach((c) => {
      const h = o.get(c.target);
      if (c.isIntersecting !== !!h)
        if (c.isIntersecting) {
          const d = e(c.target, c);
          typeof d == "function" ? o.set(c.target, d) : l.unobserve(c.target);
        } else typeof h == "function" && (h(c), o.delete(c.target));
    });
  }, l = new IntersectionObserver(a, {
    root: n,
    rootMargin: i,
    threshold: typeof s == "number" ? s : Lu[s]
  });
  return r.forEach((u) => l.observe(u)), () => l.disconnect();
}
function Du(t, { root: e, margin: n, amount: i, once: s = !1, initial: r = !1 } = {}) {
  const [o, a] = Je(r);
  return dt(() => {
    if (!t.current || s && o)
      return;
    const l = () => (a(!0), s ? void 0 : () => a(!1)), u = {
      root: e && e.current || void 0,
      margin: n,
      amount: i
    };
    return Fu(t.current, l, u);
  }, [e, t, n, s, i]), o;
}
const Mt = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
function ku() {
  const t = ct(null), e = ct({ x: 0.5, tx: 0.5 });
  return dt(() => {
    const n = t.current;
    if (!n) return;
    const i = n.getContext("2d");
    let s, r = 0;
    const o = () => {
      n.width = n.offsetWidth, n.height = n.offsetHeight;
    };
    o(), window.addEventListener("resize", o, { passive: !0 });
    const a = (c) => {
      e.current.tx = c.clientX / window.innerWidth;
    };
    window.addEventListener("mousemove", a, { passive: !0 });
    function l(c) {
      const h = Math.max(0, Math.min(1, c));
      if (h < 0.2) {
        const d = h / 0.2;
        return `rgb(${Math.round(d * 5)},${Math.round(d * 10)},${Math.round(d * 28)})`;
      } else if (h < 0.55) {
        const d = (h - 0.2) / 0.35;
        return `rgb(${Math.round(5 + d * 18)},${Math.round(10 + d * 58)},${Math.round(28 + d * 152)})`;
      } else {
        const d = (h - 0.55) / 0.45;
        return `rgb(${Math.round(23 + d * 200)},${Math.round(68 + d * 162)},${Math.round(180 + d * 75)})`;
      }
    }
    function u() {
      const c = n.width, h = n.height;
      r += 4e-3, e.current.x += (e.current.tx - e.current.x) * 0.035;
      const d = e.current.x, p = 110, m = c / p;
      for (let b = 0; b < p; b++) {
        const v = b / p, g = Math.sin(v * Math.PI * 4.5 - r * 0.85 + d * Math.PI * 4) * 0.44, x = Math.sin(v * Math.PI * 8 + r * 0.5 - d * Math.PI * 2.2) * 0.3, y = Math.cos(v * Math.PI * 2.2 + r * 0.2) * 0.16, P = Math.max(0, 1 - Math.abs(v - d) * 1.5) * 0.28, T = Math.max(0, Math.min(1, (g + x + y + 1) * 0.37 + P));
        i.fillStyle = l(T), i.fillRect(Math.floor(b * m), 0, Math.ceil(m) + 1, h);
      }
      s = requestAnimationFrame(u);
    }
    return u(), () => {
      cancelAnimationFrame(s), window.removeEventListener("resize", o), window.removeEventListener("mousemove", a);
    };
  }, []), /* @__PURE__ */ f("canvas", { ref: t, style: { position: "absolute", inset: 0, width: "100%", height: "100%", filter: "blur(2.5px)" } });
}
function Ru() {
  return /* @__PURE__ */ S(
    "section",
    {
      id: "hero",
      style: { position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#030712" },
      children: [
        /* @__PURE__ */ f(ku, {}),
        /* @__PURE__ */ f("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(3,7,18,0.88) 0%, rgba(3,7,18,0.52) 48%, rgba(3,7,18,0.0) 72%)", pointerEvents: "none" } }),
        /* @__PURE__ */ f("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: "42%", background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 100%)", pointerEvents: "none", zIndex: 2 } }),
        /* @__PURE__ */ S("div", { style: { position: "relative", zIndex: 3, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 24px", textAlign: "center" }, children: [
          /* @__PURE__ */ S(
            j.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.1 },
              style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 40 },
              children: [
                /* @__PURE__ */ f("div", { style: { height: 1, width: 32, background: "var(--theme-blue)", opacity: 0.7 } }),
                /* @__PURE__ */ f("span", { style: { fontFamily: Mt, fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.7)", letterSpacing: "0.22em", textTransform: "uppercase" }, children: "Exhibition & Abroad" }),
                /* @__PURE__ */ f("div", { style: { height: 1, width: 32, background: "var(--theme-blue)", opacity: 0.7 } })
              ]
            }
          ),
          /* @__PURE__ */ S(
            j.h1,
            {
              initial: { opacity: 0, y: 28 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.18 },
              style: { fontFamily: Mt, fontSize: "clamp(3.4rem, 8.5vw, 8.5rem)", fontWeight: 500, color: "#fff", letterSpacing: "-0.03em", lineHeight: 0.97, margin: 0 },
              children: [
                "We make Chinese brands",
                /* @__PURE__ */ f("br", {}),
                /* @__PURE__ */ f("span", { style: { color: "var(--theme-blue)" }, children: "look at home —" }),
                /* @__PURE__ */ f("br", {}),
                "overseas."
              ]
            }
          ),
          /* @__PURE__ */ f(
            j.p,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.38 },
              style: { fontFamily: Mt, fontSize: "clamp(1rem, 1.3vw, 1.15rem)", fontWeight: 300, color: "#ffffff", opacity: 0.72, marginTop: 32, marginBottom: 48, maxWidth: 500, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 },
              children: "Ultra Expo delivers the full stack for Chinese brands going global — strategy, spatial design, and end-to-end local build."
            }
          ),
          /* @__PURE__ */ S(
            j.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.52 },
              style: { display: "inline-flex", alignItems: "stretch" },
              children: [
                /* @__PURE__ */ f(
                  "a",
                  {
                    href: "#cases",
                    style: { fontFamily: Mt, fontSize: 17, fontWeight: 400, color: "#ffffff", background: "#000000", padding: "14px 36px", textDecoration: "none", display: "inline-flex", alignItems: "center", letterSpacing: "-0.01em", transition: "opacity 0.15s", whiteSpace: "nowrap" },
                    onMouseEnter: (t) => t.currentTarget.style.opacity = "0.8",
                    onMouseLeave: (t) => t.currentTarget.style.opacity = "1",
                    children: "View Cases"
                  }
                ),
                /* @__PURE__ */ f(
                  "a",
                  {
                    href: "#services",
                    style: { fontFamily: Mt, fontSize: 17, fontWeight: 400, color: "#000000", background: "#ffffff", padding: "14px 36px", textDecoration: "none", display: "inline-flex", alignItems: "center", letterSpacing: "-0.01em", transition: "opacity 0.15s", whiteSpace: "nowrap" },
                    onMouseEnter: (t) => t.currentTarget.style.opacity = "0.8",
                    onMouseLeave: (t) => t.currentTarget.style.opacity = "1",
                    children: "Our Services"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
const qe = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif", Gi = [
  { name: "BMW", logo: "https://logo.clearbit.com/bmw.com" },
  { name: "GOODWE", logo: "https://logo.clearbit.com/goodwe.com" },
  { name: "SUNGROW", logo: "https://logo.clearbit.com/sungrowpower.com" },
  { name: "Leadshine", logo: "https://logo.clearbit.com/leadshine.com" },
  { name: "KSTAR", logo: "https://logo.clearbit.com/kstar-power.com" },
  { name: "SAJ", logo: "https://logo.clearbit.com/saj-electric.com" },
  { name: "SUNTECH", logo: "https://logo.clearbit.com/suntech-power.com" },
  { name: "Coca-Cola", logo: "https://logo.clearbit.com/coca-cola.com" },
  { name: "WATTSONIC", logo: "https://logo.clearbit.com/wattsonic.com" },
  { name: "CRRC", logo: "https://logo.clearbit.com/crrcgc.cc" },
  { name: "GEO", logo: null },
  { name: "SSAM", logo: null },
  { name: "Elecnova", logo: null },
  { name: "SCUD", logo: null },
  { name: "MUST", logo: null }
], Iu = [...Gi, ...Gi];
function Bu({ item: t }) {
  return t.logo ? /* @__PURE__ */ f(
    "img",
    {
      src: t.logo,
      alt: t.name,
      style: { height: 28, width: "auto", objectFit: "contain", filter: "grayscale(1)", opacity: 0.5 },
      onError: (e) => {
        const n = e.currentTarget.parentElement;
        if (n) {
          e.currentTarget.remove();
          const i = document.createElement("span");
          i.innerText = t.name, i.style.cssText = `font-family:${qe};font-weight:500;font-size:15px;letter-spacing:0.06em;text-transform:uppercase;color:rgba(0,0,0,0.3);white-space:nowrap`, n.appendChild(i);
        }
      }
    }
  ) : /* @__PURE__ */ f("span", { style: { fontFamily: qe, fontWeight: 500, fontSize: 15, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", whiteSpace: "nowrap" }, children: t.name });
}
function Ou() {
  return /* @__PURE__ */ S("section", { style: { background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.07)", padding: "128px 0 144px", overflow: "hidden" }, children: [
    /* @__PURE__ */ f("div", { style: { maxWidth: 1760, margin: "0 auto", padding: "0 40px" }, children: /* @__PURE__ */ f(
      j.p,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.5 },
        style: { fontFamily: qe, fontSize: 36, fontWeight: 400, color: "rgba(0,0,0,0.72)", textAlign: "center", marginBottom: 44, letterSpacing: "-0.02em", lineHeight: 1.2 },
        children: "Trusted by China's most innovative global brands."
      }
    ) }),
    /* @__PURE__ */ f("div", { style: {
      maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)"
    }, children: /* @__PURE__ */ f("div", { style: { display: "flex", alignItems: "center", width: "max-content", animation: "logo-marquee 55s linear infinite" }, children: Iu.map((t, e) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", flexShrink: 0, padding: "0 44px" }, children: [
      /* @__PURE__ */ f(Bu, { item: t }),
      /* @__PURE__ */ f("div", { style: { marginLeft: 44, width: 1, height: 16, background: "rgba(0,0,0,0.1)", flexShrink: 0 } })
    ] }, `${t.name}-${e}`)) }) }),
    /* @__PURE__ */ f("style", { children: `
        @keyframes logo-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` })
  ] });
}
const Xi = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif", Zi = "var(--theme-blue)";
function ju() {
  return /* @__PURE__ */ f(
    "section",
    {
      id: "about",
      style: {
        background: "#ffffff",
        borderTop: "0.667px solid rgba(0,0,0,0.07)",
        paddingTop: 161,
        paddingBottom: 40
      },
      children: /* @__PURE__ */ f("div", { style: { maxWidth: 1760, margin: "0 auto", padding: "0 40px" }, children: /* @__PURE__ */ S(
        j.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.65 },
          style: { display: "flex", flexDirection: "column", gap: 30 },
          children: [
            /* @__PURE__ */ f(
              "div",
              {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#e0e2e6",
                  padding: "6px 10px",
                  alignSelf: "flex-start"
                },
                children: /* @__PURE__ */ f(
                  "span",
                  {
                    style: {
                      fontFamily: Xi,
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#000000",
                      letterSpacing: "2px",
                      whiteSpace: "nowrap"
                    },
                    children: "Global experience, proven delivery."
                  }
                )
              }
            ),
            /* @__PURE__ */ S(
              "h2",
              {
                style: {
                  fontFamily: Xi,
                  fontSize: 64,
                  fontWeight: 500,
                  color: "#0a0a0a",
                  letterSpacing: "-1.92px",
                  lineHeight: "70.4px",
                  margin: 0,
                  maxWidth: 1100
                },
                children: [
                  "A global exhibition delivery team ",
                  /* @__PURE__ */ f("span", { style: { color: Zi }, children: "built for Chinese brands" }),
                  " going global — from strategy and spatial design to ",
                  /* @__PURE__ */ f("span", { style: { color: Zi }, children: "end-to-end local build." })
                ]
              }
            )
          ]
        }
      ) })
    }
  );
}
const qt = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif", Wu = "var(--theme-blue)", _u = [
  { value: 15, suffix: "+", label: "Countries & Regions" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "K+㎡", label: "Exhibition Area Built" },
  { value: 20, suffix: "+", label: "Overseas Partners" }
];
function Nu({ to: t, suffix: e }) {
  const [n, i] = Je(0), s = ct(null), r = Du(s, { once: !0 });
  return dt(() => {
    if (!r) return;
    let o = null;
    const a = (l) => {
      o || (o = l);
      const u = Math.min((l - o) / 1600, 1);
      i(Math.round((1 - Math.pow(1 - u, 3)) * t)), u < 1 && requestAnimationFrame(a);
    };
    requestAnimationFrame(a);
  }, [r, t]), /* @__PURE__ */ S("span", { ref: s, children: [
    n,
    e
  ] });
}
function Uu() {
  return /* @__PURE__ */ f("section", { style: { background: "#ffffff", paddingBottom: 176 }, children: /* @__PURE__ */ S("div", { style: { maxWidth: 1760, margin: "0 auto", padding: "0 2px" }, children: [
    /* @__PURE__ */ f("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, background: "rgba(0,0,0,0.07)" }, children: _u.map((t, e) => /* @__PURE__ */ S(
      j.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.5, delay: e * 0.07 },
        style: {
          background: "#ffffff",
          padding: "24px 44px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        },
        children: [
          /* @__PURE__ */ f(
            "div",
            {
              style: {
                fontFamily: qt,
                fontSize: 56,
                fontWeight: 400,
                color: "#0a0a0a",
                letterSpacing: "-1.68px",
                lineHeight: "84px"
              },
              children: /* @__PURE__ */ f(Nu, { to: t.value, suffix: t.suffix })
            }
          ),
          /* @__PURE__ */ f(
            "div",
            {
              style: {
                fontFamily: qt,
                fontSize: 16,
                fontWeight: 300,
                color: "rgba(0,0,0,0.45)",
                lineHeight: "24px",
                marginTop: 12
              },
              children: t.label
            }
          ),
          /* @__PURE__ */ f("div", { style: { height: 23, width: 24, marginTop: 0 }, children: /* @__PURE__ */ f("div", { style: { width: 24, height: 1, background: Wu, opacity: 0.5, marginTop: 11 } }) })
        ]
      },
      t.label
    )) }),
    /* @__PURE__ */ S(
      j.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.6, delay: 0.2 },
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          paddingTop: 48,
          paddingLeft: 40,
          paddingRight: 40
        },
        children: [
          /* @__PURE__ */ f(
            "p",
            {
              style: {
                fontFamily: qt,
                fontSize: 16,
                fontWeight: 300,
                color: "rgba(0,0,0,0.45)",
                lineHeight: "28.8px",
                margin: 0
              },
              children: "Ultra Expo was founded in Suzhou, China, with operations spanning 15+ countries. We specialize in overseas exhibitions, product launches, and retail spaces — delivering the full cycle from strategy and design to localized build."
            }
          ),
          /* @__PURE__ */ f(
            "p",
            {
              style: {
                fontFamily: qt,
                fontSize: 16,
                fontWeight: 300,
                color: "rgba(0,0,0,0.45)",
                lineHeight: "28.8px",
                margin: 0
              },
              children: "We're not just a booth builder — we're the project partner that helps Chinese brands establish a professional, credible, localized presence at global exhibitions. Founded in Suzhou · 15+ countries · 200+ projects delivered."
            }
          )
        ]
      }
    )
  ] }) });
}
const Jt = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif", Yi = "var(--theme-blue)", qi = [
  {
    title: "Strategy",
    sub: "Brand Planning",
    desc: "Overseas strategy · Content & creative direction · Exhibition planning & timeline management"
  },
  {
    title: "Design",
    sub: "Spatial Design",
    desc: "Concept design · 3D visualization & rendering · Construction drawing package"
  },
  {
    title: "Abroad",
    sub: "Overseas Execution",
    desc: "Local sourcing & supplier management · Customs clearance & logistics · Cross-timezone project coordination",
    core: !0
  },
  {
    title: "Build",
    sub: "Engineering & Build",
    desc: "Factory prefabrication · On-site construction & QC · Strike, pack & return logistics"
  }
], zu = () => /* @__PURE__ */ f("svg", { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", children: /* @__PURE__ */ f("path", { d: "M8 18H28M20 26L28 18L20 10", stroke: "white", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3" }) });
function $u() {
  return /* @__PURE__ */ S(
    "section",
    {
      id: "services",
      style: {
        background: "#ffffff",
        borderTop: "0.667px solid rgba(0,0,0,0.07)",
        paddingTop: 217
      },
      children: [
        /* @__PURE__ */ S(
          j.div,
          {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5 },
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              paddingLeft: 240,
              paddingRight: 360,
              marginBottom: 20
            },
            children: [
              /* @__PURE__ */ f(
                "div",
                {
                  style: {
                    width: 287,
                    height: 1,
                    borderBottom: "1.5px dashed rgba(0,0,0,0.25)",
                    flexShrink: 0
                  }
                }
              ),
              /* @__PURE__ */ f(
                "div",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#e0e2e6",
                    padding: "6px 10px",
                    flexShrink: 0
                  },
                  children: /* @__PURE__ */ f(
                    "span",
                    {
                      style: {
                        fontFamily: Jt,
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#000000",
                        letterSpacing: "2px",
                        whiteSpace: "nowrap"
                      },
                      children: "End-to-End Exhibition Services"
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            style: {
              background: "#f4f5f7",
              paddingLeft: 540,
              paddingRight: 207,
              paddingTop: 64,
              paddingBottom: 250
            },
            children: /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column" }, children: qi.map((t, e) => /* @__PURE__ */ S(
              j.div,
              {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.45, delay: e * 0.07 },
                style: {
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "33px 0",
                  borderTop: "1.5px dashed rgba(0,0,0,0.25)",
                  borderBottom: e === qi.length - 1 ? "1.5px dashed rgba(0,0,0,0.25)" : "none"
                },
                children: [
                  /* @__PURE__ */ S("div", { style: { width: 250, flexShrink: 0 }, children: [
                    /* @__PURE__ */ f(
                      "div",
                      {
                        style: {
                          fontFamily: Jt,
                          fontSize: 36,
                          fontWeight: 500,
                          color: t.core ? Yi : "#0a0a0a",
                          letterSpacing: "-0.48px",
                          lineHeight: "36px"
                        },
                        children: t.title
                      }
                    ),
                    /* @__PURE__ */ f(
                      "div",
                      {
                        style: {
                          fontFamily: Jt,
                          fontSize: 14,
                          fontWeight: 300,
                          color: "rgba(0,0,0,0.38)",
                          lineHeight: "21px",
                          marginTop: 4
                        },
                        children: t.sub
                      }
                    )
                  ] }),
                  /* @__PURE__ */ f(
                    "p",
                    {
                      style: {
                        fontFamily: Jt,
                        fontSize: 24,
                        fontWeight: 300,
                        color: "rgba(0,0,0,0.45)",
                        lineHeight: "26.25px",
                        textAlign: "right",
                        flex: "1 0 0",
                        minWidth: 0,
                        margin: 0
                      },
                      children: t.desc
                    }
                  ),
                  /* @__PURE__ */ f(
                    "div",
                    {
                      style: {
                        width: 64,
                        height: 64,
                        background: Yi,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ f(zu, {})
                    }
                  )
                ]
              },
              t.title
            )) })
          }
        )
      ]
    }
  );
}
const Ku = "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/ac7c08ada3b7308087d07536168733b1e83c67fd.ac7c08ad.png", Hu = "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/1acb0a430a6aa68b9dff5c5c890aa6e78a887638.1acb0a43.png", Gu = "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/57a62b9c089967f5209f622fad9d49ddc0595c46.57a62b9c.png", Xu = "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/890f9388250c6bdb5182c209e6d081311a9ffa3d.890f9388.png", Zu = "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/5952956b65558da33e0d4729a399bef200605f97.5952956b.png", Yu = "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/6cfcebc876b50a1289d5d3d9993e09686d39fc42.6cfcebc8.png", qu = "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/72510adc79e7d53e1c9941348177050f2f116c7a.72510adc.png", Ju = "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/c2189f880aac07b923b11b8ca319a1f8093cf460.c2189f88.png", Tt = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif", se = [
  { client: "GOODWE", event: "Intersolar Europe", location: "Munich, Germany", year: "2026", img: Ku },
  { client: "KSTAR", event: "Intersolar Europe", location: "Munich, Germany", year: "2026", img: Hu },
  { client: "GEO", event: "The Battery Show", location: "Stuttgart, Germany", year: "2026", img: Gu },
  { client: "SSAM", event: "The Battery Show", location: "Stuttgart, Germany", year: "2026", img: Xu },
  { client: "GOODWE", event: "Intersolar São Paulo", location: "Brazil", year: "2025", img: Zu },
  { client: "KSTAR", event: "ENEX", location: "Warsaw, Poland", year: "2026", img: Yu },
  { client: "WATTSONIC", event: "International Exhibition", location: "Poland & Sweden", year: "2026", img: qu },
  { client: "LEADSHINE", event: "International Exhibitions", location: "Germany & USA", year: "2024–25", img: Ju }
], jo = 380, oe = 6, Wo = jo + oe, Ji = Wo * se.length, Qi = Wo * 3, ts = [...se, ...se, ...se];
function es({ c: t }) {
  return /* @__PURE__ */ S(
    "div",
    {
      className: "case-item",
      style: { position: "relative", width: jo, height: 240, flexShrink: 0, overflow: "hidden", cursor: "default" },
      children: [
        /* @__PURE__ */ f(
          "img",
          {
            src: t.img,
            alt: `${t.client} — ${t.event}`,
            style: { width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }
          }
        ),
        /* @__PURE__ */ S(
          "div",
          {
            className: "case-overlay",
            style: {
              position: "absolute",
              inset: 0,
              background: "rgba(3,7,18,0.78)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: 20,
              opacity: 0,
              transition: "opacity 0.22s ease"
            },
            children: [
              /* @__PURE__ */ f("div", { style: { fontFamily: Tt, fontSize: 17, fontWeight: 500, color: "#fff", letterSpacing: "-0.01em", marginBottom: 4 }, children: t.client }),
              /* @__PURE__ */ f("div", { style: { fontFamily: Tt, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.6)" }, children: t.event }),
              /* @__PURE__ */ S("div", { style: { fontFamily: Tt, fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.38)", marginTop: 2 }, children: [
                t.location,
                " · ",
                t.year
              ] })
            ]
          }
        )
      ]
    }
  );
}
function Qu() {
  return /* @__PURE__ */ S(
    "section",
    {
      id: "cases",
      style: { background: "#ffffff", borderTop: "0.667px solid rgba(0,0,0,0.07)", paddingTop: 200, overflow: "hidden" },
      children: [
        /* @__PURE__ */ f("div", { style: { maxWidth: 1760, margin: "0 auto", padding: "0 40px 52px" }, children: /* @__PURE__ */ S(
          j.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.55 },
            children: [
              /* @__PURE__ */ f(
                "div",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#e0e2e6",
                    padding: "6px 10px",
                    marginBottom: 24
                  },
                  children: /* @__PURE__ */ f(
                    "span",
                    {
                      style: {
                        fontFamily: Tt,
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#000000",
                        letterSpacing: "2.4px",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap"
                      },
                      children: "Selected Works"
                    }
                  )
                }
              ),
              /* @__PURE__ */ f("div", { style: { height: 72, overflow: "hidden" }, children: /* @__PURE__ */ f(
                "p",
                {
                  style: {
                    fontFamily: Tt,
                    fontSize: 44.8,
                    fontWeight: 500,
                    color: "#0a0a0a",
                    letterSpacing: "-1.344px",
                    lineHeight: "47.488px",
                    margin: 0,
                    paddingTop: 24,
                    whiteSpace: "nowrap"
                  },
                  children: "From design to delivery."
                }
              ) }),
              /* @__PURE__ */ f(
                "p",
                {
                  style: {
                    fontFamily: Tt,
                    fontSize: 16,
                    fontWeight: 300,
                    color: "rgba(0,0,0,0.4)",
                    lineHeight: "24px",
                    margin: "10px 0 0"
                  },
                  children: "Real projects. Real results. Every booth, every country."
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", gap: oe }, children: [
          /* @__PURE__ */ f("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ f("div", { className: "cases-row", style: { display: "flex", gap: oe, width: "max-content", animation: "cases-a 70s linear infinite" }, children: ts.map((t, e) => /* @__PURE__ */ f(es, { c: t }, `a-${e}`)) }) }),
          /* @__PURE__ */ f("div", { style: { overflow: "hidden" }, children: /* @__PURE__ */ f("div", { className: "cases-row", style: { display: "flex", gap: oe, width: "max-content", animation: "cases-b 70s linear infinite" }, children: ts.map((t, e) => /* @__PURE__ */ f(es, { c: t }, `b-${e}`)) }) })
        ] }),
        /* @__PURE__ */ f("div", { style: { height: 80, background: "#ffffff" } }),
        /* @__PURE__ */ f("style", { children: `
        @keyframes cases-a { 0% { transform: translateX(0px); } 100% { transform: translateX(-${Ji}px); } }
        @keyframes cases-b { 0% { transform: translateX(-${Qi}px); } 100% { transform: translateX(-${Ji + Qi}px); } }
        .case-item:hover .case-overlay { opacity: 1 !important; }
        .case-item:hover img { transform: scale(1.04); }
        .cases-row:hover { animation-play-state: paused; }
      ` })
      ]
    }
  );
}
const Lt = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif", Qt = "var(--theme-blue)", th = [
  { num: "01", title: "Localized Supply Chain", desc: "Local supplier networks across Europe, North America, and Southeast Asia — reducing logistics risk and compressing delivery timelines." },
  { num: "02", title: "Cross-Timezone Response", desc: "Real-time project coordination across time zones. Clients stay informed at every stage; issues get resolved fast." },
  { num: "03", title: "Controlled Timeline", desc: "From kickoff to strike, every milestone is clearly defined. Gantt-tracked. Overseas construction never becomes a black box." },
  { num: "04", title: "On-Site Management", desc: "Dedicated on-site project managers supervise every build phase. Quality visible, milestones controlled, anomalies handled in real time." }
];
function eh() {
  return /* @__PURE__ */ f("section", { style: { background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.07)", padding: "216px 0" }, children: /* @__PURE__ */ S("div", { style: { maxWidth: 1760, margin: "0 auto", padding: "0 40px" }, children: [
    /* @__PURE__ */ S(j.div, { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: !0 }, transition: { duration: 0.55 }, style: { marginBottom: 64 }, children: [
      /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }, children: [
        /* @__PURE__ */ f("div", { style: { width: 24, height: 1, background: Qt } }),
        /* @__PURE__ */ f("span", { style: { fontFamily: Lt, fontSize: 12, fontWeight: 400, color: Qt, letterSpacing: "0.22em", textTransform: "uppercase" }, children: "Why Ultra" })
      ] }),
      /* @__PURE__ */ S("h2", { style: { fontFamily: Lt, fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.03em", lineHeight: 1.06, margin: 0, maxWidth: 680 }, children: [
        "Turning cross-border uncertainty into",
        " ",
        /* @__PURE__ */ f("span", { style: { color: Qt }, children: "controlled delivery." })
      ] })
    ] }),
    /* @__PURE__ */ f("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(0,0,0,0.07)" }, children: th.map((t, e) => /* @__PURE__ */ S(
      j.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.5, delay: e * 0.07 },
        style: { background: "#ffffff", padding: "44px 36px" },
        children: [
          /* @__PURE__ */ f("div", { style: { fontFamily: Lt, fontWeight: 300, fontSize: "3rem", letterSpacing: "-0.04em", color: "rgba(77,162,255,0.12)", marginBottom: 24, lineHeight: 1 }, children: t.num }),
          /* @__PURE__ */ f("div", { style: { width: 20, height: 1, background: Qt, opacity: 0.4, marginBottom: 20 } }),
          /* @__PURE__ */ f("h3", { style: { fontFamily: Lt, fontSize: "1rem", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em", margin: "0 0 14px 0" }, children: t.title }),
          /* @__PURE__ */ f("p", { style: { fontFamily: Lt, fontSize: 14, fontWeight: 300, color: "rgba(0,0,0,0.45)", lineHeight: 1.78, margin: 0 }, children: t.desc })
        ]
      },
      t.num
    )) })
  ] }) });
}
const X = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif", Ft = "var(--theme-blue)";
function nh() {
  return /* @__PURE__ */ f("section", { id: "contact", style: { background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.07)", padding: "256px 0 176px" }, children: /* @__PURE__ */ S("div", { style: { maxWidth: 1760, margin: "0 auto", padding: "0 40px" }, children: [
    /* @__PURE__ */ f("div", { style: { maxWidth: 760, margin: "0 auto 96px", textAlign: "center" }, children: /* @__PURE__ */ S(j.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: !0 }, transition: { duration: 0.65 }, children: [
      /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 40 }, children: [
        /* @__PURE__ */ f("div", { style: { width: 28, height: 1, background: Ft } }),
        /* @__PURE__ */ f("span", { style: { fontFamily: X, fontSize: 12, fontWeight: 400, color: Ft, letterSpacing: "0.22em", textTransform: "uppercase" }, children: "Start a Project" }),
        /* @__PURE__ */ f("div", { style: { width: 28, height: 1, background: Ft } })
      ] }),
      /* @__PURE__ */ S("h2", { style: { fontFamily: X, fontSize: "clamp(2.8rem,5vw,5rem)", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.04em", lineHeight: 0.96, margin: "0 0 24px 0" }, children: [
        "Let's build your",
        /* @__PURE__ */ f("br", {}),
        /* @__PURE__ */ f("span", { style: { color: Ft }, children: "global stage." })
      ] }),
      /* @__PURE__ */ f("p", { style: { fontFamily: X, fontSize: 17, fontWeight: 300, color: "rgba(0,0,0,0.45)", marginBottom: 8, lineHeight: 1.65 }, children: "让我们一起为你的品牌，在全球搭建舞台。" }),
      /* @__PURE__ */ f("p", { style: { fontFamily: X, fontSize: 15, fontWeight: 300, color: "rgba(0,0,0,0.32)", lineHeight: 1.78, marginBottom: 48, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }, children: "Tell us your exhibition, country & city, booth size, and timeline — Ultra Expo will scope your design and overseas delivery plan." }),
      /* @__PURE__ */ S("div", { style: { display: "inline-flex", alignItems: "stretch" }, children: [
        /* @__PURE__ */ S(
          "a",
          {
            href: "mailto:jack@ultraexpo.com",
            style: { fontFamily: X, fontSize: 17, fontWeight: 400, color: "#ffffff", background: "#000000", padding: "14px 36px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, letterSpacing: "-0.01em", transition: "opacity 0.15s" },
            onMouseEnter: (t) => t.currentTarget.style.opacity = "0.8",
            onMouseLeave: (t) => t.currentTarget.style.opacity = "1",
            children: [
              "Submit Project Brief",
              /* @__PURE__ */ f("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ f("path", { d: "M2 7h10M8 3l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        ),
        /* @__PURE__ */ f(
          "a",
          {
            href: "mailto:jack@ultraexpo.com",
            style: { fontFamily: X, fontSize: 17, fontWeight: 400, color: "#000000", background: "#ffffff", border: "1px solid rgba(0,0,0,0.15)", borderLeft: "none", padding: "14px 36px", textDecoration: "none", display: "inline-flex", alignItems: "center", letterSpacing: "-0.01em", transition: "border-color 0.15s" },
            onMouseEnter: (t) => t.currentTarget.style.borderColor = "rgba(0,0,0,0.35)",
            onMouseLeave: (t) => t.currentTarget.style.borderColor = "rgba(0,0,0,0.15)",
            children: "Send an Email"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ f(
      j.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.55, delay: 0.15 },
        style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.07)" },
        children: [
          { label: "Email", value: "jack@ultraexpo.com", href: "mailto:jack@ultraexpo.com" },
          { label: "Phone", value: "+86 185 0614 4181", href: "tel:+8618506144181" },
          { label: "Headquarters", value: "Suzhou · Hong Kong · Los Angeles · Berlin" },
          { label: "Website", value: "www.ultraexpo.com", href: "https://www.ultraexpo.com" }
        ].map((t) => /* @__PURE__ */ S("div", { style: { background: "#ffffff", padding: "34px 30px" }, children: [
          /* @__PURE__ */ f("div", { style: { fontFamily: X, fontSize: 11, fontWeight: 400, color: "rgba(0,0,0,0.25)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }, children: t.label }),
          t.href ? /* @__PURE__ */ f(
            "a",
            {
              href: t.href,
              style: { fontFamily: X, fontSize: 15, fontWeight: 300, color: "rgba(0,0,0,0.5)", textDecoration: "none", transition: "color 0.15s" },
              onMouseEnter: (e) => e.currentTarget.style.color = Ft,
              onMouseLeave: (e) => e.currentTarget.style.color = "rgba(0,0,0,0.5)",
              children: t.value
            }
          ) : /* @__PURE__ */ f("span", { style: { fontFamily: X, fontSize: 15, fontWeight: 300, color: "rgba(0,0,0,0.5)" }, children: t.value })
        ] }, t.label))
      }
    ),
    /* @__PURE__ */ S("div", { style: { marginTop: 48, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }, children: [
      /* @__PURE__ */ f("span", { style: { fontFamily: X, fontSize: 13, fontWeight: 300, color: "rgba(0,0,0,0.25)" }, children: "© 2026 Ultra Expo 皓创展览. All rights reserved." }),
      /* @__PURE__ */ f("span", { style: { fontFamily: X, fontSize: 11, fontWeight: 300, color: "rgba(0,0,0,0.18)", letterSpacing: "0.18em", textTransform: "uppercase" }, children: "Global Exhibition & Space Design" })
    ] })
  ] }) });
}
const ih = "'TWK Everett', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
function sh() {
  return /* @__PURE__ */ S("div", { style: { background: "#ffffff", minHeight: "100vh", fontFamily: ih }, children: [
    /* @__PURE__ */ f(Jo, {}),
    /* @__PURE__ */ f(Ru, {}),
    /* @__PURE__ */ f(Ou, {}),
    /* @__PURE__ */ f(ju, {}),
    /* @__PURE__ */ f(Uu, {}),
    /* @__PURE__ */ f($u, {}),
    /* @__PURE__ */ f(Qu, {}),
    /* @__PURE__ */ f(eh, {}),
    /* @__PURE__ */ f(nh, {})
  ] });
}
const oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sh
}, Symbol.toStringTag, { value: "Module" }));
export {
  ah as Code0_8
};
