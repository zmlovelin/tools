import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'tl-selectDown',
  templateUrl: './select-down.component.html',
  styleUrls: ['./select-down.component.scss'],
})
export class SelectDownComponent implements OnInit {
  @Input() gropTitle = null; // 显示大标题
  @Input() showSelectTile = true; // 是否显示选中title
  @Input() filter = true; // 是否有搜索框
  @Input() data; // 数据
  @Input() showPane = true; // 上一级没有的时候不能hover出右边的
  @Input() selectWidth = 400; // 选项的width
  @Input() width; // 根dom的width
  @Input() scrollHeight = 300;
  @Input() selectValue: string | number = ''; // 当只有一个数据的时候默认选中
  @Output() change = new EventEmitter<any>();
  @ViewChild('searchInput') searchInput: ElementRef;
  selectTitle = null;
  searchValue = null;
  _datas = [];

  constructor() {

  }

  ngOnInit() {
    // this.data = [
    //   {label: 'Cadillac', value: 'Cadillac'},
    //   {label: 'Ford', value: 'Ford'},
    //   {label: 'GMC', value: 'GMC'},
    //   {label: 'Cadillac', value: 'Cadillac'},
    //   {label: 'Ford', value: 'Ford'},
    //   {label: 'GMC', value: 'GMC'},
    //   {label: 'Cadillac', value: 'Cadillac'},
    //   {label: 'Ford', value: 'Ford'},
    //   {label: 'GMC', value: 'GMC'},
    //   {label: 'Cadillac', value: 'Cadillac'},
    //   {label: 'Ford', value: 'Ford'},
    //   {label: 'GMC', value: 'GMC'},
    //   {label: 'Cadillac', value: 'Cadillac'},
    //   {label: 'Ford', value: 'Ford'},
    //   {label: 'GMC', value: 'GMC'}
    // ]
    this.selectTitle = this.gropTitle;
    this._datas = [].concat(this.data);
    // this.data = [
    //   {
    //     label: 'USA', value: 'usa.png',
    //     children: [
    //       {label: 'Cadillac', value: 'Cadillac'},
    //       {label: 'Ford', value: 'Ford'},
    //       {label: 'GMC', value: 'GMC'}
    //     ]
    //   },
    //   {
    //     label: 'jp', value: 'usa.png',
    //     children: [
    //       {label: 'Cadillac', value: 'Cadillac'},
    //       {label: 'Ford', value: 'Ford'},
    //       {label: 'GMC', value: 'GMC'}
    //     ]
    //   },
    // ]


  }

  onSelectChange(e) {
    this.selectTitle = e.label;
    this.change.emit(e);
    // console.log(e);
  }

  nzOpenChange() {
    this.searchValue = null;
    if (this.filter) {
      this.searchChange('');
      this.inputFocus();
    }
  }
  inputFocus() {
    // console.log(this.searchInput.nativeElement);
    let timer = setTimeout(() => {
      this.searchInput.nativeElement.focus();
      }, 0);
  }


  searchChange(value: string): void {
    const searchKey = (value + '').toLowerCase();
    let result = [];
    this._datas.forEach(item => {
      const item_name = (item.label + '').toLowerCase();
      if (item_name.includes(searchKey)) {
        result.push(item);
      } else {
        const children = item.children;
        if (children) {
          let childrenArr = [];
          children.forEach(child => {
            const child_name = (child.label + '').toLowerCase();
            if (child_name.includes(searchKey)) {
              childrenArr.push(child);
            }
          });
          if (childrenArr.length > 0) {
            result.push({
              label: item.label,
              children: childrenArr
            });
          }
        }
      }
    });
    this.data = [].concat(result);
  }
}
