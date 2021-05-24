import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-safeentry-checkin',
  templateUrl: './check-in.safeentry.page.html',
  styleUrls: ['./check-in.safeentry.page.scss'],
})
export class SafeentryCheckinPage implements OnInit {
  public venueId: string;
  public tenantId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.venueId = this.activatedRoute.snapshot.paramMap.get('venueId');
    this.tenantId = this.activatedRoute.snapshot.paramMap.get('tenantId');
  }
}
