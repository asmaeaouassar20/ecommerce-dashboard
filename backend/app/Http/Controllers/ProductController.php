<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function addProduct(Request $request){
        $product = new Product;
        $product->name= $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->file_path = $request->file('product-photo')->store('products');        
        $product->save();
        return $request->input();
    }


    function list(){
        return Product::all();
    }


    function delete($id){
        $res = Product::where('id' , $id)->delete();
        if($res){
            return ["result" => "product has been deleted"];
        }else{
            return ["result" => "operation failed"];
        }
    }

    function getProduct($id){
        return Product::find($id);
    }
}
