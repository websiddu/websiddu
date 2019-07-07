<template>
  <div class="chart">
    <div class="chart-title">
      Smoking is more prevalent in Europe
      <div class="split-button">
        <label :class="{selected: type=='map'}">
          <input type="radio" name="splitButton" v-model="type" value="map" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal"
              d="M 12 2 C 8.741068 2 5.8486894 3.5773875 4.0214844 6 L 4 6 L 4 6.0273438 C 2.7499527 7.6966931 2 9.7603852 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 15 4.5839844 C 17.935098 5.7673596 20 8.6326468 20 12 C 20 14.087831 19.200587 15.978318 17.898438 17.400391 C 17.642583 16.590687 16.894567 16 16 16 C 15.448 16 15 15.552 15 15 L 15 13 C 15 12.448 14.552 12 14 12 L 10 12 C 9.448 12 9 11.552 9 11 C 9 10.448 9.448 10 10 10 C 10.552 10 11 9.552 11 9 L 11 8 C 11 7.448 11.448 7 12 7 L 13 7 C 14.105 7 15 6.105 15 5 L 15 4.5839844 z M 4.2070312 10.207031 L 9 15 L 9 16 C 9 17.105 9.895 18 11 18 L 11 19.931641 C 7.0457719 19.441154 4 16.090654 4 12 C 4 11.382188 4.0755242 10.784034 4.2070312 10.207031 z"
              font-weight="400"
              font-family="sans-serif"
              white-space="normal"
              overflow="visible"
            />
          </svg>
        </label>
        <label :class="{selected: type=='table'}">
          <input type="radio" name="splitButton" v-model="type" value="table" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <g id="surface1">
              <path
                style=" "
                d="M 2.5 1 C 1.675781 1 1 1.675781 1 2.5 L 1 12.5 C 1 13.324219 1.675781 14 2.5 14 L 12.5 14 C 13.324219 14 14 13.324219 14 12.5 L 14 2.5 C 14 1.675781 13.324219 1 12.5 1 Z M 2.5 2 L 5 2 L 5 5 L 2 5 L 2 2.5 C 2 2.21875 2.21875 2 2.5 2 Z M 6 2 L 9 2 L 9 5 L 6 5 Z M 10 2 L 12.5 2 C 12.78125 2 13 2.21875 13 2.5 L 13 5 L 10 5 Z M 2 6 L 5 6 L 5 9 L 2 9 Z M 6 6 L 9 6 L 9 9 L 6 9 Z M 10 6 L 13 6 L 13 9 L 10 9 Z M 2 10 L 5 10 L 5 13 L 2.5 13 C 2.21875 13 2 12.78125 2 12.5 Z M 6 10 L 9 10 L 9 13 L 6 13 Z M 10 10 L 13 10 L 13 12.5 C 13 12.78125 12.78125 13 12.5 13 L 10 13 Z "
              />
            </g>
          </svg>
        </label>
      </div>
    </div>
    <img src="/img/chart.png" alt="Map showing smoking" v-if="type == 'map'" />
    <div class="table-wrapper" v-if="type == 'table'">
      <table class="spl-table">
        <tr>
          <th class="l">Country</th>
          <th class="r">Both</th>
          <th class="r">Male</th>
          <th class="r">Female</th>
        </tr>
        <tr v-for="row in table" :key="row.Country">
          <td>{{row.Country}}</td>
          <td class="r">{{row.both}}%</td>
          <td class="r">{{row.male}}%</td>
          <td class="r">{{row.female}}%</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "map",
      table: [
        { Country: "Algeria", both: 12.3, male: 24.1, female: 0.5 },
        { Country: "Benin", both: 4.9, male: 9.4, female: 0.5 },
        { Country: "Botswana", both: 16.3, male: 28.5, female: 4.3 },
        { Country: "Burkina Faso", both: 10.6, male: 20.3, female: 1.3 },
        { Country: "Cape Verde", both: 7.1, male: 12.8, female: 1.6 },
        { Country: "Comoros", both: 11.2, male: 19.1, female: 3.2 },
        { Country: "Congo", both: 19.3, male: 37.6, female: 1.1 },
        { Country: "Eritrea", both: 4.7, male: 9.5, female: 0.2 },
        { Country: "Ethiopia", both: 2.8, male: 5.5, female: 0.2 },
        { Country: "Gambia", both: 12.4, male: 24.9, female: 0.5 },
        { Country: "Ghana", both: 2.7, male: 5.4, female: 0.2 },
        { Country: "Kenya", both: 7.8, male: 15, female: 0.6 },
        { Country: "Lesotho", both: 20.7, male: 41.9, female: 0.3 },
        { Country: "Liberia", both: 7.4, male: 13.8, female: 1.1 },
        { Country: "Malawi", both: 9.2, male: 16.1, female: 2.4 },
        { Country: "Mali", both: 9.9, male: 18.7, female: 1.1 },
        { Country: "Mauritius", both: 15.8, male: 30.9, female: 1.4 },
        { Country: "Mozambique", both: 12.1, male: 21.7, female: 3.4 },
        { Country: "Namibia", both: 16.2, male: 26.5, female: 6.7 },
        { Country: "Niger", both: 5.3, male: 10.6, female: 0.1 },
        { Country: "Nigeria", both: 4.5, male: 8.4, female: 0.4 },
        { Country: "Rwanda", both: 8.4, male: 14.3, female: 3.3 },
        { Country: "Senegal", both: 6.9, male: 14.1, female: 0.3 },
        { Country: "Seychelles", both: 16.4, male: 28, female: 4.6 },
        { Country: "Sierra Leone", both: 17.8, male: 30.4, female: 5.7 },
        { Country: "South Africa", both: 16.6, male: 27.3, female: 6.5 },
        { Country: "Swaziland", both: 5.7, male: 10.6, female: 1.1 },
        { Country: "Togo", both: 5.3, male: 10.2, female: 0.6 },
        { Country: "Uganda", both: 5.6, male: 9.6, female: 1.7 },
        {
          Country: "United Republic of Tanzania",
          both: 10.6,
          male: 19.4,
          female: 2
        },
        { Country: "Zambia", both: 8.3, male: 15, female: 1.6 },
        { Country: "Zimbabwe", both: 10.5, male: 20.5, female: 1 },
        { Country: "Argentina", both: 15.4, male: 20, female: 11.1 },
        { Country: "Bahamas", both: 8.2, male: 14.4, female: 2.3 },
        { Country: "Barbados", both: 5.2, male: 9.6, female: 1.3 },
        { Country: "Brazil", both: 11.1, male: 14.5, female: 7.8 },
        { Country: "Canada", both: 9.8, male: 11.5, female: 8.1 },
        { Country: "Chile", both: 24.9, male: 28.4, female: 21.5 },
        { Country: "Colombia", both: 6.2, male: 9.4, female: 3.2 },
        { Country: "Costa Rica", both: 7.3, male: 10.8, female: 3.8 },
        { Country: "Cuba", both: 25.3, male: 38.1, female: 12.5 },
        { Country: "Dominican Republic", both: 10, male: 13.8, female: 6.3 },
        { Country: "Ecuador", both: 3.5, male: 6.1, female: 1 },
        { Country: "El Salvador", both: 5.9, male: 11.2, female: 1.5 },
        { Country: "Haiti", both: 8.4, male: 15.3, female: 2 },
        { Country: "Honduras", both: 10.3, male: 19.6, female: 1.2 },
        { Country: "Jamaica", both: 11.8, male: 20.1, female: 3.7 },
        { Country: "Mexico", both: 8.1, male: 12.5, female: 3.9 },
        { Country: "Panama", both: 3.3, male: 5.3, female: 1.3 },
        { Country: "Paraguay", both: 8.4, male: 13.8, female: 2.9 },
        { Country: "Peru", both: 32, male: 61.4, female: 3.2 },
        { Country: "Suriname", both: 17.4, male: 29.9, female: 5 },
        { Country: "United States", both: 15, male: 17, female: 13 },
        { Country: "Uruguay", both: 10.4, male: 13, female: 8.1 },
        { Country: "Bahrain", both: 22.2, male: 32.2, female: 3.8 },
        { Country: "Djibouti", both: 9.7, male: 18.3, female: 1.1 },
        { Country: "Egypt", both: 22.4, male: 44.7, female: 0.2 },
        {
          Country: "Islamic Republic of Iran",
          both: 9.7,
          male: 18.7,
          female: 0.6
        },
        { Country: "Kuwait", both: 20, male: 33.5, female: 1.6 },
        { Country: "Lebanon", both: 24.9, male: 32.7, female: 17 },
        { Country: "Morocco", both: 19.3, male: 39, female: 0.5 },
        { Country: "Oman", both: 9.7, male: 13.6, female: 0.3 },
        { Country: "Pakistan", both: 15.3, male: 28, female: 2 },
        { Country: "Qatar", both: 17.6, male: 23, female: 0.6 },
        { Country: "Saudi Arabia", both: 13.5, male: 22.4, female: 0.8 },
        { Country: "Tunisia", both: 28.5, male: 57.6, female: 0.8 },
        {
          Country: "United Arab Emirates",
          both: 23.4,
          male: 30.4,
          female: 0.7
        },
        { Country: "Yemen", both: 13.3, male: 22.1, female: 4.5 },
        { Country: "Albania", both: 22.9, male: 40.7, female: 5.8 },
        { Country: "Andorra", both: 25.3, male: 30.2, female: 20.2 },
        { Country: "Armenia", both: 21.3, male: 46.2, female: 1.2 },
        { Country: "Austria", both: 20.7, male: 22.1, female: 19.3 },
        { Country: "Azerbaijan", both: 16, male: 32.6, female: 0.2 },
        { Country: "Belarus", both: 21.4, male: 39.5, female: 6.2 },
        { Country: "Belgium", both: 21.2, male: 24.1, female: 18.4 },
        {
          Country: "Bosnia and Herzegovina",
          both: 30.8,
          male: 39.1,
          female: 22.6
        },
        { Country: "Bulgaria", both: 24.9, male: 33.8, female: 16.6 },
        { Country: "Croatia", both: 28.8, male: 33.1, female: 24.9 },
        { Country: "Cyprus", both: 27.7, male: 40.7, female: 14.3 },
        { Country: "Czech Republic", both: 23.7, male: 28.6, female: 19.1 },
        { Country: "Denmark", both: 15.1, male: 14.8, female: 15.3 },
        { Country: "Estonia", both: 22, male: 31.2, female: 14.2 },
        { Country: "Finland", both: 14, male: 16.5, female: 11.6 },
        { Country: "France", both: 23.6, male: 26.9, female: 20.6 },
        { Country: "Georgia", both: 22.7, male: 44.7, female: 3.4 },
        { Country: "Germany", both: 21.1, male: 25.2, female: 17.2 },
        { Country: "Greece", both: 32.7, male: 43.9, female: 22.3 },
        { Country: "Hungary", both: 22.9, male: 28.1, female: 18.2 },
        { Country: "Iceland", both: 11.1, male: 10.9, female: 11.2 },
        { Country: "Ireland", both: 18, male: 19.3, female: 16.7 },
        { Country: "Israel", both: 19.9, male: 28.3, female: 11.9 },
        { Country: "Italy", both: 18.1, male: 22.2, female: 14.3 },
        { Country: "Kazakhstan", both: 16.7, male: 30.7, female: 4.2 },
        { Country: "Kyrgyzstan", both: 20.5, male: 39.4, female: 2.6 },
        { Country: "Latvia", both: 28.6, male: 44, female: 16 },
        { Country: "Lithuania", both: 19.9, male: 30.7, female: 11.1 },
        { Country: "Luxembourg", both: 17.4, male: 19.2, female: 15.5 },
        { Country: "Malta", both: 18.5, male: 23.5, female: 13.5 },
        { Country: "Montenegro", both: 37.2, male: 39.3, female: 35.2 },
        { Country: "Netherlands", both: 19.9, male: 21.4, female: 18.5 },
        { Country: "Norway", both: 13.8, male: 14, female: 13.6 },
        { Country: "Poland", both: 23, male: 28.7, female: 17.7 },
        { Country: "Portugal", both: 15.5, male: 22.4, female: 9.4 },
        { Country: "Republic of Moldova", both: 20.5, male: 38.5, female: 4.4 },
        { Country: "Romania", both: 23, male: 30.8, female: 15.8 },
        { Country: "Russian Federation", both: 31.4, male: 50.5, female: 15.5 },
        { Country: "Serbia", both: 29.8, male: 32.7, female: 27 },
        { Country: "Slovakia", both: 21.5, male: 28.8, female: 14.9 },
        { Country: "Slovenia", both: 17.2, male: 20, female: 14.5 },
        { Country: "Spain", both: 21.8, male: 25.2, female: 18.6 },
        { Country: "Sweden", both: 10.4, male: 9.7, female: 11.1 },
        { Country: "Switzerland", both: 19.2, male: 21.2, female: 17.3 },
        { Country: "Turkey", both: 22.9, male: 36.1, female: 10.4 },
        { Country: "Ukraine", both: 23.6, male: 42.6, female: 7.8 },
        { Country: "United Kingdom", both: 16.3, male: 18.5, female: 14.3 },
        { Country: "Uzbekistan", both: 9.2, male: 18.1, female: 0.9 },
        { Country: "Bangladesh", both: 19.9, male: 38.9, female: 0.7 },
        { Country: "India", both: 9.7, male: 17.5, female: 1.4 },
        { Country: "Indonesia", both: 33.9, male: 66.1, female: 1.6 },
        { Country: "Maldives", both: 22.4, male: 43.6, female: 1.6 },
        { Country: "Myanmar", both: 15.6, male: 27.2, female: 4.7 },
        { Country: "Nepal", both: 15.8, male: 25.9, female: 6.8 },
        { Country: "Sri Lanka", both: 10, male: 20.9, female: 0.2 },
        { Country: "Thailand", both: 17.2, male: 33.6, female: 1.6 },
        { Country: "Timor-Leste", both: 32.1, male: 58.8, female: 4.8 },
        { Country: "Australia", both: 12.5, male: 14, female: 11 },
        { Country: "Brunei", both: 13.1, male: 24.1, female: 1.4 },
        { Country: "Cambodia", both: 12.7, male: 24.9, female: 1.6 },
        { Country: "China", both: 23.3, male: 43.9, female: 1.9 },
        { Country: "Cook Islands", both: 18.2, male: 22.1, female: 14.1 },
        { Country: "Fiji", both: 14.3, male: 23, female: 5.5 },
        { Country: "Japan", both: 16.9, male: 27, female: 7.5 },
        { Country: "Kiribati", both: 39.2, male: 50.3, female: 28.9 },
        {
          Country: "Lao People's Democratic Republic",
          both: 23,
          male: 41,
          female: 5.5
        },
        { Country: "Malaysia", both: 17.3, male: 34.3, female: 0.6 },
        { Country: "Mongolia", both: 22, male: 40.4, female: 4.2 },
        { Country: "Nauru", both: 31.9, male: 29.8, female: 34 },
        { Country: "New Zealand", both: 13, male: 14.1, female: 12 },
        { Country: "Niue", both: 10, male: 13.4, female: 6.8 },
        { Country: "Palau", both: 12.8, male: 18.9, female: 6 },
        { Country: "Papua New Guinea", both: 30.8, male: 42.3, female: 19.1 },
        { Country: "Philippines", both: 18.2, male: 31.3, female: 5.2 },
        { Country: "Republic of Korea", both: 21.1, male: 37.5, female: 5 },
        { Country: "Samoa", both: 20.9, male: 29.5, female: 11.8 },
        { Country: "Singapore", both: 12.9, male: 23.1, female: 3.1 },
        { Country: "Tonga", both: 23.7, male: 38, female: 9.7 },
        { Country: "Vanuatu", both: 12.2, male: 22.8, female: 1.7 },
        { Country: "Vietnam", both: 19.1, male: 38.3, female: 0.8 }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.chart {
  display: block;
  border: solid 1px #eee;
  border-radius: 4px;
  margin: 0 auto;
  max-width: 730px;
  .chart-title {
    font-size: 18px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.split-button {
  display: inline-flex;
  align-items: center;
  border: solid 1px #eee;
  border-radius: 8px;
  overflow: hidden;

  input {
    visibility: hidden;
    -webkit-appearance: none;
    height: 0;
    width: 0;
    position: absolute;
  }
  label {
    display: flex;
    align-items: center;
    padding: 4px 6px;
    overflow: hidden;
    cursor: pointer;

    svg {
      height: 20px;
      width: 20px;
      fill-opacity: 0.8;
    }

    &.selected {
      background: #303f9f;
      svg {
        fill: #fff;
        fill-opacity: 1;
      }
    }
  }
}

.table-wrapper {
  max-height: 420px;
  overflow-y: auto;
}

.spl-table {
  width: inherit;
  font-size: 13px;
  display: table;
  width: 100%;

  .r {
    text-align: right;
  }
  .l {
    text-align: left;
  }
}
</style>
