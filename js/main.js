"use strict";

var sidebarToggle = document.querySelector("#sidebarToggle");
var sidebar = document.querySelector(".sidebar");

sidebarToggle.onclick = function () {
  sidebar.classList.toggle("toggled");
};

$('.btn-change').on('click', function () {
  $('.btn-change').removeClass('active');
  $(this).addClass('active');
});

if ($('.checkbox_switch').length) {
  $('.checkbox_switch input[type="checkbox"]').on('click', function () {
    $(this).parent().parent().toggleClass('active');
  });
}

;
$(function () {
  var $datepicker = $('.js-datepicker');
  var datepicker = $datepicker.datepicker({
    autoClose: true,
    classes: 'datepicker__calendar'
  });
});
Vue.component('v-select', VueSelect.VueSelect);
new Vue({
  data: function data() {
    return {
      items: [{
        name: '',
        amount: '',
        note: ''
      }],
      work: ['Ремонт', 'Монтаж'],
      OpenIndicator: {
        render: function render(createElement) {
          return createElement('span', '');
        }
      },
      executor: ['ООО "Контрагент по ремонту ТС', 'ООО "Контрагент по ремонту КПП']
    };
  },
  watch: {
    'items': {
      handler: function handler(newValue, oldValue) {
        newValue.forEach(function (item) {
          item.name + item.amount + item.note;
        });
      },
      deep: true
    }
  },
  methods: {
    AddItem: function AddItem() {
      this.items.push({
        name: '',
        amount: '',
        note: ''
      });
    },
    removeItem: function removeItem() {
      this.items.splice(this.items, 1);
    }
  }
}).$mount("#table-service-app");
new Vue({
  data: function data() {
    return {
      items: [{
        name: '',
        lading: '',
        unloading: '',
        trains: '',
        distance: '',
        transportTotal: '',
        transporttrailer: ''
      }],
      OpenIndicator: {
        render: function render(createElement) {
          return createElement('span', '');
        }
      },
      cargo: ['Песок', 'Уголь', 'Газ'],
      specialEquipment: ['САТ 320dl', 'CAT 325DL', 'Shantui SE220'],
      machineOperator: ['Стрельцов Иван Игнатьевич', 'Пискунов Олег Сергеевич', 'Баторшин Данил Раивелич']
    };
  },
  watch: {
    'items': {
      handler: function handler(newValue, oldValue) {
        newValue.forEach(function (item) {
          item.name + item.lading + item.unloading + item.trains + item.distance + item.transportTotal + item.transporttrailer;
        });
      },
      deep: true
    }
  },
  methods: {
    AddItem: function AddItem() {
      this.items.push({
        name: '',
        lading: '',
        unloading: '',
        trains: '',
        distance: '',
        transportTotal: '',
        transporttrailer: ''
      });
    },
    removeItem: function removeItem() {
      this.items.splice(this.items, 1);
    }
  }
}).$mount("#table-tasks-app");
new Vue({
  data: function data() {
    return {
      items: [{
        liters: '',
        departure: '',
        "return": '',
        litersHanded: '',
        coefficient: '',
        special: '',
        engine: '',
        norm: '',
        actually: ''
      }],
      OpenIndicator: {
        render: function render(createElement) {
          return createElement('span', '');
        }
      },
      petrol: ['Бензин', 'Пропан'],
      petrolСode: ['АИ-80', 'АИ-92', 'АИ-95', 'АИ-95+', 'АИ-98']
    };
  },
  watch: {
    'items': {
      handler: function handler(newValue, oldValue) {
        newValue.forEach(function (item) {
          item.liters + item.departure + item["return"] + item.litersHanded + item.coefficient + item.engine + item.norm + item.actually;
        });
      },
      deep: true
    }
  },
  methods: {
    AddItem: function AddItem() {
      this.items.push({
        liters: '',
        departure: '',
        "return": '',
        litersHanded: '',
        coefficient: '',
        special: '',
        engine: '',
        norm: '',
        actually: ''
      });
    },
    removeItem: function removeItem() {
      this.items.splice(this.items, 1);
    }
  }
}).$mount("#table-fuel-app");
new Vue({
  el: '#select-trailer',
  data: {
    trailer: ['565656511188822', '232661118829166', '002121841188866'],
    OpenIndicator: {
      render: function render(createElement) {
        return createElement('span', '');
      }
    }
  }
});
new Vue({
  el: '#select-driver',
  data: {
    driver: ['Стрельцов Иван Игнатьевич', 'Пискунов Олег Сергеевич', 'Баторшин Данил Раивелич'],
    OpenIndicator: {
      render: function render(createElement) {
        return createElement('span', '');
      }
    }
  }
});
new Vue({
  el: '#select-gasoline',
  data: {
    gasoline: ['565656511188822', '232661118829166', '002121841188866'],
    driver: ['Стрельцов Иван Игнатьевич', 'Пискунов Олег Сергеевич', 'Баторшин Данил Раивелич'],
    OpenIndicator: {
      render: function render(createElement) {
        return createElement('span', '');
      }
    }
  }
});
var app = new Vue({
  el: '#apps',
  data: function data() {
    return {
      divs: [""],
      options: [{
        objectNumber: "2323"
      }, {
        objectNumber: "22323"
      }, {
        objectNumber: "36sdsd525"
      }, {
        objectNumber: "2333f"
      }, {
        objectNumber: "021185"
      }, {
        objectNumber: "4545"
      }, {
        objectNumber: "232323"
      }, {
        objectNumber: "245454"
      }],
      petrol: ['Бензин', 'Пропан'],
      petrolСode: ['АИ-80', 'АИ-92', 'АИ-95', 'АИ-95+', 'АИ-98'],
      OpenIndicator: {
        render: function render(createElement) {
          return createElement('span', '');
        }
      }
    };
  },
  methods: {
    addRow: function addRow() {
      this.divs.push({
        id: this.index,
        liters: '0'
      });
      this.index++;
    },
    deleteRow: function deleteRow() {
      this.divs.splice(this.items, 1);
    }
  }
});
//# sourceMappingURL=main.js.map
