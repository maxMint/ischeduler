[HttpPost]
[ValidateAntiForgeryToken]
public ActionResult Edit(Client client)
{
   
if (ModelState.IsValid)
      {
          ViewBag.OperationResult = ClientService.UpsertClient(client, CurrentUserId);
          if (ViewBag.OperationResult.IsOk)
          {
              return RedirectToAction("Edit", new { id = ViewBag.OperationResult.Id });
          }
      }
      ViewBag.IsEdit = true;
      client.Preferences = client.Preferences ?? new List<Preference>();
      return View(client);
}