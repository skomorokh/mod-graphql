var path = require("path");

/**
 * GET /instance-storage/instances
 *
 * accept: application/json
 * content-type: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIsInRlbmFudCI6ImRpa3UifQ.ScbcT5-Ho5ubdflM_d-CXgocSSSce--9Z0DY3l_o3lrkjgxCS0ljAAJ-gXsUMpG248fNZrib-AHssw0xsSKqoQ
 * accept-encoding: gzip,deflate
 * user-agent: node-fetch/1.0 (+https://github.com/bitinn/node-fetch)
 * connection: close
 * host: localhost:9130
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("x-okapi-trace", "GET mod-authtoken-1.4.1-SNAPSHOT.21 http://10.0.2.15:9131/instance-storage/instances : 202 1319us, GET mod-inventory-storage-11.0.0-SNAPSHOT.114 http://10.0.2.15:9139/instance-storage/instances : 200 4899us");
  res.setHeader("content-type", "application/json");
  res.setHeader("accept", "application/json");
  res.setHeader("x-okapi-tenant", "diku");
  res.setHeader("accept-encoding", "gzip,deflate");
  res.setHeader("user-agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
  res.setHeader("host", "localhost:9130");
  res.setHeader("x-okapi-request-id", "981105/instance-storage");
  res.setHeader("x-okapi-url", "http://10.0.2.15:9130");
  res.setHeader("x-okapi-permissions", "[\"inventory-storage.instances.collection.get\"]");
  res.setHeader("x-okapi-user-id", "13851c57-8a6c-5d43-9ef2-880828a1ed74");
  res.setHeader("x-okapi-token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIsInRlbmFudCI6ImRpa3UifQ.ScbcT5-Ho5ubdflM_d-CXgocSSSce--9Z0DY3l_o3lrkjgxCS0ljAAJ-gXsUMpG248fNZrib-AHssw0xsSKqoQ");
  res.setHeader("connection", "close");
  res.setHeader("transfer-encoding", "chunked");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ewogICJpbnN0YW5jZXMiIDogWyB7CiAgICAiaWQiIDogIjY5NjQwMzI4LTc4OGUtNDNmYy05YzNjLWFmMzllMjQzZjNiNyIsCiAgICAic291cmNlIiA6ICJTYW1wbGUiLAogICAgInRpdGxlIiA6ICJBQkEgSm91cm5hbCIsCiAgICAiYWx0ZXJuYXRpdmVUaXRsZXMiIDogWyBdLAogICAgInNlcmllcyIgOiBbIF0sCiAgICAiaWRlbnRpZmllcnMiIDogWyB7CiAgICAgICJ2YWx1ZSIgOiAiMDc0Ny0wMDg4IiwKICAgICAgImlkZW50aWZpZXJUeXBlSWQiIDogIjkxMzMwMGIyLTAzZWQtNDY5YS04MTc5LWMxMDkyYzk5MTIyNyIKICAgIH0sIHsKICAgICAgInZhbHVlIiA6ICI4NDY0MTgzOSIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICJjODU4ZTRmMi0yYjZiLTQzODUtODQyYi02MDczMmVlMTRhYmIiCiAgICB9IF0sCiAgICAiY29udHJpYnV0b3JzIiA6IFsgXSwKICAgICJzdWJqZWN0cyIgOiBbIF0sCiAgICAiY2xhc3NpZmljYXRpb25zIiA6IFsgXSwKICAgICJwdWJsaWNhdGlvbiIgOiBbIHsKICAgICAgInB1Ymxpc2hlciIgOiAiQW1lcmljYW4gQmFyIEFzc29jaWF0aW9uIiwKICAgICAgInBsYWNlIiA6ICJDaGljYWdvLCBJbGwuIiwKICAgICAgImRhdGVPZlB1YmxpY2F0aW9uIiA6ICIxOTE1LTE5ODMiCiAgICB9IF0sCiAgICAidXJscyIgOiBbIF0sCiAgICAiaW5zdGFuY2VUeXBlSWQiIDogImEzNTk0N2M2LTc5NWYtNDFkNC05YzM0LWU1NjY4ZDkyNWQzZiIsCiAgICAicGh5c2ljYWxEZXNjcmlwdGlvbnMiIDogWyBdLAogICAgImxhbmd1YWdlcyIgOiBbIF0sCiAgICAibm90ZXMiIDogWyBdLAogICAgIm1ldGFkYXRhIiA6IHsKICAgICAgImNyZWF0ZWREYXRlIiA6ICIyMDE4LTA1LTAzVDAyOjM5OjQ2LjU1OSswMDAwIiwKICAgICAgImNyZWF0ZWRCeVVzZXJJZCIgOiAiMTM4NTFjNTctOGE2Yy01ZDQzLTllZjItODgwODI4YTFlZDc0IiwKICAgICAgInVwZGF0ZWREYXRlIiA6ICIyMDE4LTA1LTAzVDAyOjM5OjQ2LjU1OSswMDAwIiwKICAgICAgInVwZGF0ZWRCeVVzZXJJZCIgOiAiMTM4NTFjNTctOGE2Yy01ZDQzLTllZjItODgwODI4YTFlZDc0IgogICAgfQogIH0sIHsKICAgICJpZCIgOiAiNjUwNmI3OWItNzcwMi00OGIyLTk3NzQtYTFjNTM4ZmRkMzRlIiwKICAgICJzb3VyY2UiIDogIlNhbXBsZSIsCiAgICAidGl0bGUiIDogIk5vZCIsCiAgICAiYWx0ZXJuYXRpdmVUaXRsZXMiIDogWyBdLAogICAgInNlcmllcyIgOiBbIF0sCiAgICAiaWRlbnRpZmllcnMiIDogWyB7CiAgICAgICJ2YWx1ZSIgOiAiMDk1NjY4NzY5NSIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICI4MjYxMDU0Zi1iZTc4LTQyMmQtYmQ1MS00ZWQ5ZjMzYzM0MjIiCiAgICB9LCB7CiAgICAgICJ2YWx1ZSIgOiAiOTc4MDk1NjY4NzY5NSIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICI4MjYxMDU0Zi1iZTc4LTQyMmQtYmQ1MS00ZWQ5ZjMzYzM0MjIiCiAgICB9IF0sCiAgICAiY29udHJpYnV0b3JzIiA6IFsgewogICAgICAibmFtZSIgOiAiQmFybmVzLCBBZHJpYW4iLAogICAgICAiY29udHJpYnV0b3JOYW1lVHlwZUlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMmEiLAogICAgICAicHJpbWFyeSIgOiB0cnVlCiAgICB9IF0sCiAgICAic3ViamVjdHMiIDogWyBdLAogICAgImNsYXNzaWZpY2F0aW9ucyIgOiBbIF0sCiAgICAicHVibGljYXRpb24iIDogWyBdLAogICAgInVybHMiIDogWyBdLAogICAgImluc3RhbmNlVHlwZUlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMmMiLAogICAgInBoeXNpY2FsRGVzY3JpcHRpb25zIiA6IFsgXSwKICAgICJsYW5ndWFnZXMiIDogWyBdLAogICAgIm5vdGVzIiA6IFsgXSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAxOC0wNS0wM1QwMjozOTo0Ny42ODIrMDAwMCIsCiAgICAgICJjcmVhdGVkQnlVc2VySWQiIDogIjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAxOC0wNS0wM1QwMjozOTo0Ny42ODIrMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogIjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIKICAgIH0KICB9LCB7CiAgICAiaWQiIDogIjMwZmNjOGU3LWEwMTktNDNmNC1iNjQyLTJlZGMzODlmNDUwMSIsCiAgICAic291cmNlIiA6ICJtYW51YWwiLAogICAgInRpdGxlIiA6ICJUaGUgQW1lcmljYW4gSm91cm5hbCBvZiBNZWRpY2luZSIsCiAgICAiYWx0ZXJuYXRpdmVUaXRsZXMiIDogWyAiVGhlIEFtZXJpY2FuIGpvdXJuYWwgb2YgbWVkaWNpbmUgSW9ubGluZSkiLCAiQW0uIEouIG1lZCIsICJHcmVlbiBqb3VybmFsIiBdLAogICAgInNlcmllcyIgOiBbIF0sCiAgICAiaWRlbnRpZmllcnMiIDogWyB7CiAgICAgICJ2YWx1ZSIgOiAiQUpNRUFaIiwKICAgICAgImlkZW50aWZpZXJUeXBlSWQiIDogIjU5M2I3OGNiLTMyZjMtNDRkMS1iYThjLTYzZmQ1ZTY5ODllNiIKICAgIH0sIHsKICAgICAgInZhbHVlIiA6ICIwMDAyLTkzNDMiLAogICAgICAiaWRlbnRpZmllclR5cGVJZCIgOiAiOTEzMzAwYjItMDNlZC00NjlhLTgxNzktYzEwOTJjOTkxMjI3IgogICAgfSwgewogICAgICAidmFsdWUiIDogIm1lZDQ5MDAyMjcwIiwKICAgICAgImlkZW50aWZpZXJUeXBlSWQiIDogImM4NThlNGYyLTJiNmItNDM4NS04NDJiLTYwNzMyZWUxNGFiYiIKICAgIH0gXSwKICAgICJjb250cmlidXRvcnMiIDogWyBdLAogICAgInN1YmplY3RzIiA6IFsgIkNsaW5pY2FsIG1lZGljaW5lLVBlcmlvZGljYWxzIiwgIk1lZGljaW5lIiwgIkdlbmVlc2t1bmRlIiBdLAogICAgImNsYXNzaWZpY2F0aW9ucyIgOiBbIHsKICAgICAgImNsYXNzaWZpY2F0aW9uTnVtYmVyIiA6ICJSQzYwIC5BNSIsCiAgICAgICJjbGFzc2lmaWNhdGlvblR5cGVJZCIgOiAiY2UxNzZhY2UtYTUzZS00YjRkLWFhODktNzI1ZWQ3YjJlZGFjIgogICAgfSwgewogICAgICAiY2xhc3NpZmljYXRpb25OdW1iZXIiIDogIlcxIEFNNDkzIiwKICAgICAgImNsYXNzaWZpY2F0aW9uVHlwZUlkIiA6ICJhN2Y0ZDAzZi1iMGQ4LTQ5NmMtYWViZi00ZTljZGI2NzgyMDAiCiAgICB9IF0sCiAgICAicHVibGljYXRpb24iIDogWyB7CiAgICAgICJwdWJsaXNoZXIiIDogIkR1bi1Eb25uZWxsZXkgUHViLiBDby4gIiwKICAgICAgInBsYWNlIiA6ICJOZXcgWW9yayIsCiAgICAgICJkYXRlT2ZQdWJsaWNhdGlvbiIgOiAiMTk0Ni0iCiAgICB9IF0sCiAgICAidXJscyIgOiBbIF0sCiAgICAiaW5zdGFuY2VUeXBlSWQiIDogImEzNTk0N2M2LTc5NWYtNDFkNC05YzM0LWU1NjY4ZDkyNWQzZiIsCiAgICAicGh5c2ljYWxEZXNjcmlwdGlvbnMiIDogWyAidi4sIGlsbC4gMjcgY20uIiBdLAogICAgImxhbmd1YWdlcyIgOiBbICJlbmciIF0sCiAgICAibm90ZXMiIDogWyAiUHJpbnQgc3Vic2NyaXB0aW9uIGNhbmNlbGxlZCBieSBEZWMuIDIwMTYuIiwgIk1heSAxOTg4LTogXCJBIFlvcmtlIG1lZGljYWwuIEFsc28ga25vd24gYXMgdGhlIEdyZWVuIGpvdXJuYWwiLCAiUHVibGlzaGVyOiBFeGNlcnB0YSBNZWRpY2EsIDIwMDgtOyBOZXcgWW9yaywgTlkgOiBFbHNldmllciBJbmMuIDIwMTMtIiwgIlN1cHBsZW1lbnRzIGlzc3VlZCBpcnJlZ3VsYXJseSwgMTk4Mi4iLCAiT2ZmaWNpYWwgam91cm5hbCBvZiB0aGUgQXNzb2NpYXRpb24gb2YgUHJvZmVzc29ycyBvZiBNZWRpY2luZSAyMDA1LSIsICJJbmRleGVkIHF1aW5xdWVubmlhbGx5IGluOiBBbWVyaWNhbiBqb3VybmFsIG9mIG1lZGljaW5lIDUgeWVhciBjdW11bGF0aXZlIGluZGV4IiwgbnVsbCBdLAogICAgIm1ldGFkYXRhIiA6IHsKICAgICAgImNyZWF0ZWREYXRlIiA6ICIyMDE4LTA1LTAzVDAyOjM5OjQ4LjUxOCswMDAwIiwKICAgICAgImNyZWF0ZWRCeVVzZXJJZCIgOiAiMTM4NTFjNTctOGE2Yy01ZDQzLTllZjItODgwODI4YTFlZDc0IiwKICAgICAgInVwZGF0ZWREYXRlIiA6ICIyMDE4LTA1LTAzVDAyOjM5OjQ4LjUxOCswMDAwIiwKICAgICAgInVwZGF0ZWRCeVVzZXJJZCIgOiAiMTM4NTFjNTctOGE2Yy01ZDQzLTllZjItODgwODI4YTFlZDc0IgogICAgfQogIH0sIHsKICAgICJpZCIgOiAiY2YyM2FkZjAtNjFiYS00ODg3LWJmODItOTU2YzRhYWUyMjYwIiwKICAgICJzb3VyY2UiIDogIlNhbXBsZSIsCiAgICAidGl0bGUiIDogIlRlbWVyYWlyZSIsCiAgICAiYWx0ZXJuYXRpdmVUaXRsZXMiIDogWyBdLAogICAgInNlcmllcyIgOiBbIF0sCiAgICAiaWRlbnRpZmllcnMiIDogWyB7CiAgICAgICJ2YWx1ZSIgOiAiMTQ0NzI5NDEzMCIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICI4MjYxMDU0Zi1iZTc4LTQyMmQtYmQ1MS00ZWQ5ZjMzYzM0MjIiCiAgICB9LCB7CiAgICAgICJ2YWx1ZSIgOiAiOTc4MTQ0NzI5NDEzMCIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICI4MjYxMDU0Zi1iZTc4LTQyMmQtYmQ1MS00ZWQ5ZjMzYzM0MjIiCiAgICB9IF0sCiAgICAiY29udHJpYnV0b3JzIiA6IFsgewogICAgICAibmFtZSIgOiAiTm92aWssIE5hb21pIiwKICAgICAgImNvbnRyaWJ1dG9yTmFtZVR5cGVJZCIgOiAiMmI5NGM2MzEtZmNhOS00ODkyLWE3MzAtMDNlZTUyOWZmZTJhIiwKICAgICAgInByaW1hcnkiIDogdHJ1ZQogICAgfSBdLAogICAgInN1YmplY3RzIiA6IFsgXSwKICAgICJjbGFzc2lmaWNhdGlvbnMiIDogWyBdLAogICAgInB1YmxpY2F0aW9uIiA6IFsgXSwKICAgICJ1cmxzIiA6IFsgXSwKICAgICJpbnN0YW5jZVR5cGVJZCIgOiAiMmI5NGM2MzEtZmNhOS00ODkyLWE3MzAtMDNlZTUyOWZmZTJjIiwKICAgICJwaHlzaWNhbERlc2NyaXB0aW9ucyIgOiBbIF0sCiAgICAibGFuZ3VhZ2VzIiA6IFsgXSwKICAgICJub3RlcyIgOiBbIF0sCiAgICAibWV0YWRhdGEiIDogewogICAgICAiY3JlYXRlZERhdGUiIDogIjIwMTgtMDUtMDNUMDI6Mzk6NDkuMzAwKzAwMDAiLAogICAgICAiY3JlYXRlZEJ5VXNlcklkIiA6ICIxMzg1MWM1Ny04YTZjLTVkNDMtOWVmMi04ODA4MjhhMWVkNzQiLAogICAgICAidXBkYXRlZERhdGUiIDogIjIwMTgtMDUtMDNUMDI6Mzk6NDkuMzAwKzAwMDAiLAogICAgICAidXBkYXRlZEJ5VXNlcklkIiA6ICIxMzg1MWM1Ny04YTZjLTVkNDMtOWVmMi04ODA4MjhhMWVkNzQiCiAgICB9CiAgfSwgewogICAgImlkIiA6ICI3ZmJkNWQ4NC02MmQxLTQ0YzYtOWM0NS02Y2IxNzM5OThiYmQiLAogICAgInNvdXJjZSIgOiAiU2FtcGxlIiwKICAgICJ0aXRsZSIgOiAiQnJpZGdldCBKb25lcydzIEJhYnk6IHRoZSBkaWFyaWVzIiwKICAgICJhbHRlcm5hdGl2ZVRpdGxlcyIgOiBbIF0sCiAgICAiZWRpdGlvbiIgOiAiRmlyc3QgQW1lcmljYW4gRWRpdGlvbiIsCiAgICAic2VyaWVzIiA6IFsgXSwKICAgICJpZGVudGlmaWVycyIgOiBbIHsKICAgICAgInZhbHVlIiA6ICJvY245NTY2MjU5NjEiLAogICAgICAiaWRlbnRpZmllclR5cGVJZCIgOiAiNWQxNjRmNGItMGIxNS00ZTQyLWFlNzUtY2ZjZjg1MzE4YWQ5IgogICAgfSBdLAogICAgImNvbnRyaWJ1dG9ycyIgOiBbIHsKICAgICAgIm5hbWUiIDogIkZpZWxkaW5nLCBIZWxlbiIsCiAgICAgICJjb250cmlidXRvck5hbWVUeXBlSWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyYSIsCiAgICAgICJwcmltYXJ5IiA6IHRydWUKICAgIH0gXSwKICAgICJzdWJqZWN0cyIgOiBbICJKb25lcywgQnJpZGdldCIsICJQcmVnbmFudCB3b21lbiIsICJFbmdsYW5kIiwgIkh1bW9yb3VzIGZpY3Rpb24iLCAiRGlhcnkgZmljdGlvbiIgXSwKICAgICJjbGFzc2lmaWNhdGlvbnMiIDogWyB7CiAgICAgICJjbGFzc2lmaWNhdGlvbk51bWJlciIgOiAiUFI2MDU2Lkk0NTg4IiwKICAgICAgImNsYXNzaWZpY2F0aW9uVHlwZUlkIiA6ICJjZTE3NmFjZS1hNTNlLTRiNGQtYWE4OS03MjVlZDdiMmVkYWMiCiAgICB9IF0sCiAgICAicHVibGljYXRpb24iIDogWyB7CiAgICAgICJwdWJsaXNoZXIiIDogIkFsZnJlZCBBLiBLbm9wZiIsCiAgICAgICJwbGFjZSIgOiAiTmV3IFlvcmsiLAogICAgICAiZGF0ZU9mUHVibGljYXRpb24iIDogIjIwMTYiCiAgICB9IF0sCiAgICAidXJscyIgOiBbIF0sCiAgICAiaW5zdGFuY2VUeXBlSWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyYyIsCiAgICAicGh5c2ljYWxEZXNjcmlwdGlvbnMiIDogWyAiMjE5IHBhZ2VzIDsgMjAgY20uIiBdLAogICAgImxhbmd1YWdlcyIgOiBbICJlbmciIF0sCiAgICAibm90ZXMiIDogWyAiQnJpZGdldCBKb25lcyBmaW5kcyBoZXJzZWxmIHVuZXhwZWN0ZWRseSBwcmVnbmFudCBhdCB0aGUgZWxldmVudGggaG91ci4gSG93ZXZlciwgaGVyIGpveWZ1bCBwcmVnbmFuY3kgaXMgZG9taW5hdGVkIGJ5IG9uZSBjcnVjaWFsIGJ1dCBhd2t3YXJkIHF1ZXN0aW9uIC0td2hvIGlzIHRoZSBmYXRoZXI/IENvdWxkIGl0IGJlIGhvbm9yYWJsZSwgZGVjZW50LCBub3RhYmxlIGh1bWFuIHJpZ2h0cyBsYXd5ZXIsIE1hcmsgRGFyY3k/IE9yLCBpcyBpdCBjaGFybWluZywgd2l0dHksIGFuZCB0b3RhbGx5IGRlc3BpY2FibGUsIERhbmllbCBDbGVhdmVyPyIgXSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAxOC0wNS0wM1QwMjozOTo1MC4wOTMrMDAwMCIsCiAgICAgICJjcmVhdGVkQnlVc2VySWQiIDogIjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAxOC0wNS0wM1QwMjozOTo1MC4wOTMrMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogIjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIKICAgIH0KICB9LCB7CiAgICAiaWQiIDogIjVmOTY2OWU1LWQ1OWYtNDZhMC1iYzI3LWJjMDVhM2IyYzc4MSIsCiAgICAic291cmNlIiA6ICJMb2NhbDogTU9EUyIsCiAgICAidGl0bGUiIDogIkVkd2FyZCBNY0d1aXJlLCBSSEEiLAogICAgImFsdGVybmF0aXZlVGl0bGVzIiA6IFsgXSwKICAgICJzZXJpZXMiIDogWyBdLAogICAgImlkZW50aWZpZXJzIiA6IFsgewogICAgICAidmFsdWUiIDogIjIyMTY5MDgzIiwKICAgICAgImlkZW50aWZpZXJUeXBlSWQiIDogIjgyNjEwNTRmLWJlNzgtNDIyZC1iZDUxLTRlZDlmMzNjMzQyMiIKICAgIH0sIHsKICAgICAgInZhbHVlIiA6ICIxODUxOTE0IiwKICAgICAgImlkZW50aWZpZXJUeXBlSWQiIDogIjgyNjEwNTRmLWJlNzgtNDIyZC1iZDUxLTRlZDlmMzNjMzQyMiIKICAgIH0sIHsKICAgICAgInZhbHVlIiA6ICJHQjkxNDE4MTYiLAogICAgICAiaWRlbnRpZmllclR5cGVJZCIgOiAiODI2MTA1NGYtYmU3OC00MjJkLWJkNTEtNGVkOWYzM2MzNDIyIgogICAgfSwgewogICAgICAidmFsdWUiIDogIjA3MTY1MjQ3ODMiLAogICAgICAiaWRlbnRpZmllclR5cGVJZCIgOiAiODI2MTA1NGYtYmU3OC00MjJkLWJkNTEtNGVkOWYzM2MzNDIyIgogICAgfSBdLAogICAgImNvbnRyaWJ1dG9ycyIgOiBbIHsKICAgICAgIm5hbWUiIDogIkZhbGxvbiwgQnJpYW4uIiwKICAgICAgImNvbnRyaWJ1dG9yVHlwZUlkIiA6ICIiLAogICAgICAiY29udHJpYnV0b3JUeXBlVGV4dCIgOiAiIiwKICAgICAgImNvbnRyaWJ1dG9yTmFtZVR5cGVJZCIgOiAiMmI5NGM2MzEtZmNhOS00ODkyLWE3MzAtMDNlZTUyOWZmZTJhIgogICAgfSBdLAogICAgInN1YmplY3RzIiA6IFsgXSwKICAgICJjbGFzc2lmaWNhdGlvbnMiIDogWyBdLAogICAgInB1YmxpY2F0aW9uIiA6IFsgXSwKICAgICJ1cmxzIiA6IFsgXSwKICAgICJpbnN0YW5jZVR5cGVJZCIgOiAiMmI5NGM2MzEtZmNhOS00ODkyLWE3MzAtMDNlZTUyOWZmZTJjIiwKICAgICJwaHlzaWNhbERlc2NyaXB0aW9ucyIgOiBbIF0sCiAgICAibGFuZ3VhZ2VzIiA6IFsgXSwKICAgICJub3RlcyIgOiBbIF0sCiAgICAibWV0YWRhdGEiIDogewogICAgICAiY3JlYXRlZERhdGUiIDogIjIwMTgtMDUtMDNUMDI6NDA6MTIuODk3KzAwMDAiLAogICAgICAiY3JlYXRlZEJ5VXNlcklkIiA6ICIxMzg1MWM1Ny04YTZjLTVkNDMtOWVmMi04ODA4MjhhMWVkNzQiLAogICAgICAidXBkYXRlZERhdGUiIDogIjIwMTgtMDUtMDNUMDI6NDA6MTIuODk3KzAwMDAiLAogICAgICAidXBkYXRlZEJ5VXNlcklkIiA6ICIxMzg1MWM1Ny04YTZjLTVkNDMtOWVmMi04ODA4MjhhMWVkNzQiCiAgICB9CiAgfSwgewogICAgImlkIiA6ICJlNTRiMWY0ZC03ZDA1LTRiMWEtOTM2OC0zYzM2Yjc1ZDhhYzYiLAogICAgInNvdXJjZSIgOiAiU2FtcGxlIiwKICAgICI=", "base64"));
  res.write(new Buffer("dGl0bGUiIDogIlRyYW5zcGFyZW50IHdhdGVyIiwKICAgICJhbHRlcm5hdGl2ZVRpdGxlcyIgOiBbIF0sCiAgICAic2VyaWVzIiA6IFsgXSwKICAgICJpZGVudGlmaWVycyIgOiBbIHsKICAgICAgInZhbHVlIiA6ICJvY245Njg3Nzc4NDYiLAogICAgICAiaWRlbnRpZmllclR5cGVJZCIgOiAiNWQxNjRmNGItMGIxNS00ZTQyLWFlNzUtY2ZjZjg1MzE4YWQ5IgogICAgfSwgewogICAgICAidmFsdWUiIDogIjk3ODYzMTY4MDAzMTIiLAogICAgICAiaWRlbnRpZmllclR5cGVJZCIgOiAiODI2MTA1NGYtYmU3OC00MjJkLWJkNTEtNGVkOWYzM2MzNDIyIgogICAgfSwgewogICAgICAidmFsdWUiIDogIjYzMTY4MDAzMTIiLAogICAgICAiaWRlbnRpZmllclR5cGVJZCIgOiAiODI2MTA1NGYtYmU3OC00MjJkLWJkNTEtNGVkOWYzM2MzNDIyIgogICAgfSwgewogICAgICAidmFsdWUiIDogIk9UQS0xMDMxIE90w6EgUmVjb3JkcyIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICJiNWQ4Y2RjNC05NDQxLTQ4N2MtOTBjZi0wYzdlYzk3NzI4ZWIiCiAgICB9LCB7CiAgICAgICJ2YWx1ZSIgOiAiKE9Db0xDKTk2ODc3Nzg0NiIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICI3ZTU5MTE5Ny1mMzM1LTRhZmItYmM2ZC1hNmQ3NmNhM2JhY2UiCiAgICB9IF0sCiAgICAiY29udHJpYnV0b3JzIiA6IFsgewogICAgICAibmFtZSIgOiAiU29zYSwgT21hciIsCiAgICAgICJjb250cmlidXRvclR5cGVJZCIgOiAiMmI5NGM2MzEtZmNhOS00ODkyLWE3MzAtMDNlZTUyOWZmZTJiIiwKICAgICAgImNvbnRyaWJ1dG9yTmFtZVR5cGVJZCIgOiAiMmI5NGM2MzEtZmNhOS00ODkyLWE3MzAtMDNlZTUyOWZmZTJhIiwKICAgICAgInByaW1hcnkiIDogdHJ1ZQogICAgfSwgewogICAgICAibmFtZSIgOiAiS2VpdGEsIFNlY2tvdSwgMTk3Ny0iLAogICAgICAiY29udHJpYnV0b3JUeXBlSWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyYiIsCiAgICAgICJjb250cmlidXRvck5hbWVUeXBlSWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyYSIsCiAgICAgICJwcmltYXJ5IiA6IGZhbHNlCiAgICB9IF0sCiAgICAic3ViamVjdHMiIDogWyAiV29ybGQgbXVzaWMuIiwgIkphenoiIF0sCiAgICAiY2xhc3NpZmljYXRpb25zIiA6IFsgewogICAgICAiY2xhc3NpZmljYXRpb25OdW1iZXIiIDogIk0xMzY2LlM2NyIsCiAgICAgICJjbGFzc2lmaWNhdGlvblR5cGVJZCIgOiAiY2UxNzZhY2UtYTUzZS00YjRkLWFhODktNzI1ZWQ3YjJlZGFjIgogICAgfSBdLAogICAgInB1YmxpY2F0aW9uIiA6IFsgewogICAgICAicHVibGlzaGVyIiA6ICJPdMOhIFJlY29yZHMsICIsCiAgICAgICJwbGFjZSIgOiAiW1BsYWNlIG9mIHB1YmxpY2F0aW9uIG5vdCBpZGVudGlmaWVkXTogIiwKICAgICAgImRhdGVPZlB1YmxpY2F0aW9uIiA6ICJbMjAxN10iCiAgICB9IF0sCiAgICAidXJscyIgOiBbIF0sCiAgICAiaW5zdGFuY2VUeXBlSWQiIDogIjJlNDhlNzEzLTE3ZjMtNGMxMy1hOWY4LTIzODQ1YmIyMTBhYyIsCiAgICAiaW5zdGFuY2VGb3JtYXRJZCIgOiAiMzA5YzNhM2QtZDU0Yy00NTE5LWI5NzgtMmM1YzJkZTc4ZDk1IiwKICAgICJwaHlzaWNhbERlc2NyaXB0aW9ucyIgOiBbICIxIGF1ZGlvIGRpc2M6IGRpZ2l0YWw7IDQgMy80IGluLiIgXSwKICAgICJsYW5ndWFnZXMiIDogWyAidW5kIiBdLAogICAgIm5vdGVzIiA6IFsgIlRpdGxlIGZyb20gZGlzYyBsYWJlbC4iLCAiQWxsIGNvbXBvc2l0aW9ucyB3cml0dGVuIGJ5IE9tYXIgU29zYSBhbmQgU2Vja291IEtlaXRhLCBleGNlcHQgdHJhY2tzIDYsIDggYW5kIDEwIHdyaXR0ZW4gYnkgT21hciBTb3NhLiIsICJQcm9kdWNlZCBieSBTdGV2ZSBBcmfDvGVsbGVzIGFuZCBPbWFyIFNvc2EuIiwgIk9tYXIgU29zYSwgZ3JhbmQgcGlhbm8sIEZlbmRlciBSaG9kZXMsIHNhbXBsZXIsIG1pY3JvS29yZywgdm9jYWxzIDsgU2Vja291IEtlaXRhLCBrb3JhLCB0YWxraW5nIGRydW0sIGRqZW1iZSwgc2FiYXIsIHZvY2FscyA7IFd1IFRvbmcsIHNoZW5nLCBiYXd1IDsgTWlla28gTWl5YXpha2ksIGtvdG8gOyBHdXN0YXZvIE92YWxsZXMsIGJhdGEgZHJ1bXMsIGN1bG8nZSBwdXlhLCBtYXJhY2FzLCBndWF0YWNhLCBjYWxhYmF6YSwgY2xhdmUgOyBFJ0pvdW5nLUp1LCBnZW9qdW5nbyA7IE1vc2luIEtoYW4gS2F3YSwgbmFnYWRpIDsgRG9taW5pcXVlIEh1Y2hldCwgYmlyZCBlZmZlY3RzLiIgXSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAxOC0wNS0wM1QwMjozOTo1MS4xMDQrMDAwMCIsCiAgICAgICJjcmVhdGVkQnlVc2VySWQiIDogIjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAxOC0wNS0wM1QwMjozOTo1MS4xMDQrMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogIjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIKICAgIH0KICB9LCB7CiAgICAiaWQiIDogImYzMWEzNmRlLWZjZjgtNDRmOS04N2VmLWE1NWQwNmFkMjFhZSIsCiAgICAic291cmNlIiA6ICJTYW1wbGUiLAogICAgInRpdGxlIiA6ICJUaGUgR2lybCBvbiB0aGUgVHJhaW4iLAogICAgImFsdGVybmF0aXZlVGl0bGVzIiA6IFsgIkZpcnN0IGFsdGVybmF0aXZlIHRpdGxlIiwgIlNlY29uZCBhbHRlcm5hdGl2ZSB0aXRsZSIgXSwKICAgICJzZXJpZXMiIDogWyBdLAogICAgImlkZW50aWZpZXJzIiA6IFsgewogICAgICAidmFsdWUiIDogIkIwMUxPN1BKT0UiLAogICAgICAiaWRlbnRpZmllclR5cGVJZCIgOiAiN2Y5MDc1MTUtYTFiZi00NTEzLThhMzgtOTJlMWEwN2M1MzlkIgogICAgfSBdLAogICAgImNvbnRyaWJ1dG9ycyIgOiBbIHsKICAgICAgIm5hbWUiIDogIkNyZWF0b3IgQSIsCiAgICAgICJjb250cmlidXRvck5hbWVUeXBlSWQiIDogIjJlNDhlNzEzLTE3ZjMtNGMxMy1hOWY4LTIzODQ1YmIyMTBhYSIsCiAgICAgICJwcmltYXJ5IiA6IHRydWUKICAgIH0sIHsKICAgICAgIm5hbWUiIDogIkNyZWF0b3IgQiIsCiAgICAgICJjb250cmlidXRvck5hbWVUeXBlSWQiIDogImU4YjMxMWE2LTNiMjEtNDNmMi1hMjY5LWRkOTMxMGNiMmQwYSIsCiAgICAgICJwcmltYXJ5IiA6IGZhbHNlCiAgICB9IF0sCiAgICAic3ViamVjdHMiIDogWyBdLAogICAgImNsYXNzaWZpY2F0aW9ucyIgOiBbIF0sCiAgICAicHVibGljYXRpb24iIDogWyBdLAogICAgInVybHMiIDogWyBdLAogICAgImluc3RhbmNlVHlwZUlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMmMiLAogICAgInBoeXNpY2FsRGVzY3JpcHRpb25zIiA6IFsgXSwKICAgICJsYW5ndWFnZXMiIDogWyBdLAogICAgIm5vdGVzIiA6IFsgXSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAxOC0wNS0wM1QwMjozOTo1MS44NzYrMDAwMCIsCiAgICAgICJjcmVhdGVkQnlVc2VySWQiIDogIjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAxOC0wNS0wM1QwMjozOTo1MS44NzYrMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogIjEzODUxYzU3LThhNmMtNWQ0My05ZWYyLTg4MDgyOGExZWQ3NCIKICAgIH0KICB9LCB7CiAgICAiaWQiIDogImE4OWVjY2YwLTU3YTYtNDk1ZS04OThkLTMyYjliMjIxMGYyZiIsCiAgICAic291cmNlIiA6ICJTYW1wbGUiLAogICAgInRpdGxlIiA6ICJJbnRlcmVzdGluZyBUaW1lcyIsCiAgICAiYWx0ZXJuYXRpdmVUaXRsZXMiIDogWyBdLAogICAgInNlcmllcyIgOiBbIF0sCiAgICAiaWRlbnRpZmllcnMiIDogWyB7CiAgICAgICJ2YWx1ZSIgOiAiMDU1MjE0MjM1MiIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICI4MjYxMDU0Zi1iZTc4LTQyMmQtYmQ1MS00ZWQ5ZjMzYzM0MjIiCiAgICB9LCB7CiAgICAgICJ2YWx1ZSIgOiAiOTc4MDU1MjE0MjM1MiIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICI4MjYxMDU0Zi1iZTc4LTQyMmQtYmQ1MS00ZWQ5ZjMzYzM0MjIiCiAgICB9IF0sCiAgICAiY29udHJpYnV0b3JzIiA6IFsgewogICAgICAibmFtZSIgOiAiUHJhdGNoZXR0LCBUZXJyeSIsCiAgICAgICJjb250cmlidXRvck5hbWVUeXBlSWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyYSIsCiAgICAgICJwcmltYXJ5IiA6IHRydWUKICAgIH0gXSwKICAgICJzdWJqZWN0cyIgOiBbIF0sCiAgICAiY2xhc3NpZmljYXRpb25zIiA6IFsgXSwKICAgICJwdWJsaWNhdGlvbiIgOiBbIF0sCiAgICAidXJscyIgOiBbIF0sCiAgICAiaW5zdGFuY2VUeXBlSWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyYyIsCiAgICAicGh5c2ljYWxEZXNjcmlwdGlvbnMiIDogWyBdLAogICAgImxhbmd1YWdlcyIgOiBbIF0sCiAgICAibm90ZXMiIDogWyBdLAogICAgIm1ldGFkYXRhIiA6IHsKICAgICAgImNyZWF0ZWREYXRlIiA6ICIyMDE4LTA1LTAzVDAyOjM5OjUyLjY4MiswMDAwIiwKICAgICAgImNyZWF0ZWRCeVVzZXJJZCIgOiAiMTM4NTFjNTctOGE2Yy01ZDQzLTllZjItODgwODI4YTFlZDc0IiwKICAgICAgInVwZGF0ZWREYXRlIiA6ICIyMDE4LTA1LTAzVDAyOjM5OjUyLjY4MiswMDAwIiwKICAgICAgInVwZGF0ZWRCeVVzZXJJZCIgOiAiMTM4NTFjNTctOGE2Yy01ZDQzLTllZjItODgwODI4YTFlZDc0IgogICAgfQogIH0sIHsKICAgICJpZCIgOiAiMTgwZjRlMWUtOTc4ZS00Yjc3LTlkM2QtMDVhZjlkN2VmODc2IiwKICAgICJzb3VyY2UiIDogIkxvY2FsOiBNT0RTIiwKICAgICJ0aXRsZSIgOiAiQ2FsaWZvcm5pYTogaXRzIGdvbGQgYW5kIGl0cyBpbmhhYml0YW50cywgYnkgdGhlIGF1dGhvciBvZiAnU2V2ZW4geWVhcnMgb24gdGhlIFNsYXZlIGNvYXN0IG9mIEFmcmljYScuIiwKICAgICJhbHRlcm5hdGl2ZVRpdGxlcyIgOiBbIF0sCiAgICAic2VyaWVzIiA6IFsgXSwKICAgICJpZGVudGlmaWVycyIgOiBbIHsKICAgICAgInZhbHVlIiA6ICI2OTIyODg4MiIsCiAgICAgICJpZGVudGlmaWVyVHlwZUlkIiA6ICI4MjYxMDU0Zi1iZTc4LTQyMmQtYmQ1MS00ZWQ5ZjMzYzM0MjIiCiAgICB9IF0sCiAgICAiY29udHJpYnV0b3JzIiA6IFsgewogICAgICAibmFtZSIgOiAiSHVudGxleSwgSGVucnkgVmVlbCIsCiAgICAgICJjb250cmlidXRvclR5cGVJZCIgOiAiIiwKICAgICAgImNvbnRyaWJ1dG9yVHlwZVRleHQiIDogIiIsCiAgICAgICJjb250cmlidXRvck5hbWVUeXBlSWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyYSIKICAgIH0gXSwKICAgICJzdWJqZWN0cyIgOiBbIF0sCiAgICAiY2xhc3NpZmljYXRpb25zIiA6IFsgXSwKICAgICJwdWJsaWNhdGlvbiIgOiBbIF0sCiAgICAidXJscyIgOiBbIF0sCiAgICAiaW5zdGFuY2VUeXBlSWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyYyIsCiAgICAicGh5c2ljYWxEZXNjcmlwdGlvbnMiIDogWyBdLAogICAgImxhbmd1YWdlcyIgOiBbIF0sCiAgICAibm90ZXMiIDogWyBdLAogICAgIm1ldGFkYXRhIiA6IHsKICAgICAgImNyZWF0ZWREYXRlIiA6ICIyMDE4LTA1LTAzVDAyOjQwOjEyLjg4NyswMDAwIiwKICAgICAgImNyZWF0ZWRCeVVzZXJJZCIgOiAiMTM4NTFjNTctOGE2Yy01ZDQzLTllZjItODgwODI4YTFlZDc0IiwKICAgICAgInVwZGF0ZWREYXRlIiA6ICIyMDE4LTA1LTAzVDAyOjQwOjEyLjg4NyswMDAwIiwKICAgICAgInVwZGF0ZWRCeVVzZXJJZCIgOiAiMTM4NTFjNTctOGE2Yy01ZDQzLTllZjItODgwODI4YTFlZDc0IgogICAgfQogIH0gXSwKICAidG90YWxSZWNvcmRzIiA6IDExOAp9", "base64"));
  res.end();

  return __filename;
};