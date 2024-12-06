import {Component, OnInit} from '@angular/core';
import {MyMsgService} from '../../msgservice';
import {NodeService} from '../../nodeservice';
import {first} from 'rxjs';

@Component({
  selector: 'app-couponsmain',
  templateUrl: './couponsmain.component.html',
  styleUrls: ['./couponsmain.component.css']
})
export class CouponsmainComponent implements OnInit {
  businessFormats: any[] = [];
  selectedFormat: any = null;
  resultData: Array<any> = [];
  historyData: Array<any> = [];
  totalRecords = 0;
  totalHistoryRecords = 0;
  first = 0;
  rowsByPage = 30;
  selectedRow:any = null;

  protected readonly Math = Math;
  isShowDetails = false;

  constructor(private mymsgservice: MyMsgService,
              private nodeService: NodeService) {
    this.loadLists();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.mymsgservice.publishMessage('pantalla-cupones');
    }, 500);
  }

  loadLists() {
    this.nodeService.getBusinessFormats().then(bf => {
      this.businessFormats = bf;
      console.log(this.businessFormats);
    })
  }

  doSearch() {
    console.log('do search-->');
    this.nodeService.getCoupons().then(coupons => {
      this.resultData = coupons;
      this.totalRecords = this.resultData.length;
    })
  }


  showModal(row:any) {
    this.selectedRow = row;
    this.isShowDetails = true;
    this.historyData = row.history;
    this.totalHistoryRecords = this.historyData.length;
  }
}
